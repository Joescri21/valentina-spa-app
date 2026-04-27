import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth } from '../../../core/services/authServices';

@Component({
  selector: 'app-booking-options',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './booking-options.html',
})
export class BookingOptions {
  private authService = inject(Auth);
  private router = inject(Router);
  errorMessage: string = '';

  // Formulario para login de cliente
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  onLogin() {
    this.errorMessage = '';
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Validamos con el servicio
      const success = this.authService.login(email!, password!);

      if (success) {
        const role = this.authService.getUserRole();
        // Solo clientes pueden ingresar desde booking-options
        if (role === 'client') {
          this.router.navigate(['/client-dashboard']);
        } else {
          this.errorMessage = 'Solo clientes pueden reservar desde aquí. Usa login-page para admin.';
        }
      } else {
        this.errorMessage = 'Credenciales incorrectas. Usa: cliente@correo.com / 123';
      }
    }
  }
}
