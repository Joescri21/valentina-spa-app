import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ServicioService, Servicio, Cita } from '../../../../core/services/servicio.service';
import { Calendario } from '../calendario/calendario';

@Component({
  selector: 'app-citas',
  imports: [CommonModule, ReactiveFormsModule, Calendario],
  templateUrl: './citas.html',
})
export class Citas implements OnInit {
  private servicioService = inject(ServicioService);

  servicioSeleccionado: Servicio | null = null;
  citasRegistradas: Cita[] = [];
  mostrarFormulario = false;
  horariosDisponibles: string[] = [];
  fechaMinima: string = this.obtenerFechaMinima();

  formularioCita = new FormGroup({
    clienteNombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    clienteEmail: new FormControl('', [Validators.required, Validators.email]),
    clienteTelefono: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    fecha: new FormControl('', Validators.required),
    hora: new FormControl('', [
      Validators.required,
      (control) => {
        if (!control.value || !this.servicioSeleccionado) return null;

        // Convertimos la hora seleccionada (HH:mm) a minutos totales del día
        const [horas, minutos] = control.value.split(':').map(Number);
        const minutosInicio = (horas * 60) + minutos;
        const minutosFin = minutosInicio + this.servicioSeleccionado.duracion;
        const limiteCierre = 19 * 60; // 19:00 convertido a minutos (1140)

        // Si la hora de fin supera el cierre, devolvemos el error
        return minutosFin > limiteCierre ? { horaCierre: true } : null;
      }
    ]),
  });

  ngOnInit() {
    this.servicioSeleccionado = this.servicioService.obtenerServicioSeleccionado();
    this.citasRegistradas = this.servicioService.obtenerCitas();

    if (this.servicioSeleccionado) {
      this.mostrarFormulario = true;
      this.generarHorarios();
    }
  }

  // Obtiene la fecha mínima (hoy) en formato YYYY-MM-DD usando zona horaria local
  obtenerFechaMinima(): string {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const día = String(hoy.getDate()).padStart(2, '0');
    return `${año}-${mes}-${día}`;
  }

  // Genera intervalos de tiempo (ej. cada 30 min) basados en la duración del servicio
  generarHorarios() {
    if (!this.servicioSeleccionado) return;

    const slots = [];
    let current = 9 * 60; // 09:00 AM en minutos
    const endLimit = 19 * 60; // 07:00 PM en minutos
    const duracion = this.servicioSeleccionado.duracion;

    while (current + duracion <= endLimit) {
      const hours = Math.floor(current / 60).toString().padStart(2, '0');
      const minutes = (current % 60).toString().padStart(2, '0');
      slots.push(`${hours}:${minutes}`);
      current += 30; // Incrementos de 30 minutos para ofrecer más opciones
    }
    this.horariosDisponibles = slots;
  }

  seleccionarHora(hora: string) {
    this.formularioCita.patchValue({ hora });
  }

  // Recibe la fecha del calendario y la asigna al formulario
  onFechaSeleccionada(fecha: string) {
    this.formularioCita.patchValue({ fecha });
  }

  reservarCita() {
  if (this.formularioCita.valid && this.servicioSeleccionado) {
      let { fecha, hora } = this.formularioCita.value;

      // Corregir la fecha para evitar problemas de zona horaria
      // El input type="date" devuelve formato YYYY-MM-DD en zona local
      // Aseguramos que se guarde correctamente sin ajustes UTC
      fecha = fecha || '';

      // VALIDACIÓN CELOSA: Revisar si ya existe una cita ese día a esa hora
      const existeCita = this.citasRegistradas.some(c => c.fecha === fecha && c.hora === hora);

      if (existeCita) {
        alert('¡Híjole! Este horario ya está ocupado por otro cliente. Por favor elige otra hora.');
        return; // Detenemos el proceso
      }
      const nuevaCita: Cita = {
        servicio: this.servicioSeleccionado,
        clienteNombre: this.formularioCita.value.clienteNombre || '',
        clienteEmail: this.formularioCita.value.clienteEmail || '',
        clienteTelefono: this.formularioCita.value.clienteTelefono || '',
        fecha: fecha,
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
