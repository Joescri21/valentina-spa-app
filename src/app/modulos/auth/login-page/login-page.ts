import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth } from '../../../core/services/authServices';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login-page.html',
})
export class LoginPage {
  private authService = inject(Auth);
  private router = inject(Router);
  errorMessage: string = '';

  // Creamos el formulario
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  onLogin() {
    this.errorMessage = '';
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Llamamos al servicio de autenticación
      const success = this.authService.login(email!, password!);

      if (success) {
        const role = this.authService.getUserRole();
        // Redirigimos según el rol
        if (role === 'admin') {
          this.router.navigate(['/admin-dasboard']);
        } else if (role === 'client') {
          this.router.navigate(['/client-dashboard']);
        }
      } else {
        this.errorMessage = 'Credenciales incorrectas. Intenta con admin@valentinaspa.com / 123 o cliente@correo.com / 123';
      }
    }
  }
}
