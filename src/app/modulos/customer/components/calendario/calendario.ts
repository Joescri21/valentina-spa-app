import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, Output, EventEmitter, inject, OnInit, AfterViewInit } from '@angular/core';
import { ServicioService, Servicio } from '../../../../core/services/servicio.service';

@Component({
  selector: 'app-calendario',
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './calendario.html',
  styles: [`
    :host ::ng-deep calendar-date {
      --color-primary: #ec4899;
      --color-primary-light: #f472b6;
      --color-primary-lighter: #fbcfe8;
      --calendar-accent: #ec4899;
    }

    :host ::ng-deep calendar-date [aria-current="date"] {
      background-color: #ec4899 !important;
      color: white !important;
    }

    :host ::ng-deep calendar-date button:hover:not([aria-current="date"]) {
      background-color: #fbcfe8 !important;
      color: #ec4899 !important;
    }

    :host ::ng-deep .cally {
      --accent-color: #ec4899 !important;
    }
  `]
})
export class Calendario implements OnInit, AfterViewInit {
  private servicioService = inject(ServicioService);
  servicioSeleccionado: Servicio | null = null;

  @ViewChild('calendarElement') calendarElement!: ElementRef<any>;
  @Output() fechaSeleccionada = new EventEmitter<string>();

  horas = ['10:00 AM', '11:00 AM', '12:00 PM', '14:00 PM', '16:00 PM', '18:00 PM'];
  selectedHorario = '16:00 PM';

  ngOnInit() {
    this.servicioSeleccionado = this.servicioService.obtenerServicioSeleccionado();
  }

  ngAfterViewInit() {
    if (this.calendarElement && this.calendarElement.nativeElement) {
      const calendarDateElement = this.calendarElement.nativeElement.querySelector('calendar-date');
      if (calendarDateElement) {
        calendarDateElement.addEventListener('change', (event: any) => {
          const fecha = event.detail?.value || event.target?.value;
          if (fecha) {
            this.fechaSeleccionada.emit(fecha);
          }
        });
      }
    }
  }
}
