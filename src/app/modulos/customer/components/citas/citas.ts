import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ServicioService, Servicio, Cita } from '../../../../core/services/servicio.service';

@Component({
  selector: 'app-citas',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './citas.html',
})
export class Citas implements OnInit {
  private servicioService = inject(ServicioService);

  servicioSeleccionado: Servicio | null = null;
  citasRegistradas: Cita[] = [];
  mostrarFormulario = false;

  formularioCita = new FormGroup({
    clienteNombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    clienteEmail: new FormControl('', [Validators.required, Validators.email]),
    clienteTelefono: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    fecha: new FormControl('', Validators.required),
    hora: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.servicioSeleccionado = this.servicioService.obtenerServicioSeleccionado();
    this.citasRegistradas = this.servicioService.obtenerCitas();
    
    if (this.servicioSeleccionado) {
      this.mostrarFormulario = true;
    }
  }

  reservarCita() {
    if (this.formularioCita.valid && this.servicioSeleccionado) {
      const nuevaCita: Cita = {
        servicio: this.servicioSeleccionado,
        clienteNombre: this.formularioCita.value.clienteNombre || '',
        clienteEmail: this.formularioCita.value.clienteEmail || '',
        clienteTelefono: this.formularioCita.value.clienteTelefono || '',
        fecha: this.formularioCita.value.fecha || '',
        hora: this.formularioCita.value.hora || '',
      };

      this.servicioService.agregarCita(nuevaCita);
      this.citasRegistradas = this.servicioService.obtenerCitas();
      this.formularioCita.reset();
      this.servicioSeleccionado = null;
      this.mostrarFormulario = false;

      alert('¡Cita reservada exitosamente!');
    }
  }

  seleccionarOtroServicio() {
    this.servicioSeleccionado = null;
    this.mostrarFormulario = false;
    this.formularioCita.reset();
  }

  cancelarCita(id: number | undefined) {
    if (id && confirm('¿Deseas cancelar esta cita?')) {
      this.servicioService.cancelarCita(id);
      this.citasRegistradas = this.servicioService.obtenerCitas();
    }
  }

  obtenerFechaFormato(fecha: string): string {
    return new Date(fecha).toLocaleDateString('es-ES');
  }
}
