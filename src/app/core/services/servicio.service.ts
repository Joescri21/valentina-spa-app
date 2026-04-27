import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  duracion: number; // en minutos
  precio: number;
}

export interface Cita {
  id?: number;
  servicio: Servicio;
  fecha: string;
  hora: string;
  clienteNombre: string;
  clienteEmail: string;
  clienteTelefono: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private servicios: Servicio[] = [
    {
      id: 1,
      nombre: 'Masaje Relajante',
      descripcion: 'Masaje completo de relajación corporal',
      imagen: 'https://images.unsplash.com/photo-1544161515-81aae3ff8556?w=400&h=300&fit=crop',
      duracion: 60,
      precio: 85.00
    },
    {
      id: 2,
      nombre: 'Facial Hidratante',
      descripcion: 'Tratamiento facial con productos premium',
      imagen: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop',
      duracion: 45,
      precio: 65.00
    },
    {
      id: 3,
      nombre: 'Tratamiento Corporal',
      descripcion: 'Exfoliación y masaje corporal completo',
      imagen: 'https://images.unsplash.com/photo-1599654445240-a987f5f5eb09?w=400&h=300&fit=crop',
      duracion: 90,
      precio: 120.00
    },
    {
      id: 4,
      nombre: 'Manicura Deluxe',
      descripcion: 'Manicura con diseño personalizado',
      imagen: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop',
      duracion: 45,
      precio: 45.00
    }
  ];

  private servicioSeleccionado = new BehaviorSubject<Servicio | null>(null);
  servicioSeleccionado$ = this.servicioSeleccionado.asObservable();

  private citas = new BehaviorSubject<Cita[]>([]);
  citas$ = this.citas.asObservable();

  constructor() { }

  obtenerServicios(): Servicio[] {
    return this.servicios;
  }

  obtenerServicio(id: number): Servicio | undefined {
    return this.servicios.find(s => s.id === id);
  }

  seleccionarServicio(servicio: Servicio) {
    this.servicioSeleccionado.next(servicio);
  }

  obtenerServicioSeleccionado() {
    return this.servicioSeleccionado.value;
  }

  agregarCita(cita: Cita) {
    const citasActuales = this.citas.value;
    const nuevaCita = {
      ...cita,
      id: citasActuales.length + 1
    };
    this.citas.next([...citasActuales, nuevaCita]);
  }

  obtenerCitas(): Cita[] {
    return this.citas.value;
  }

  cancelarCita(id: number) {
    const citasActuales = this.citas.value;
    this.citas.next(citasActuales.filter(c => c.id !== id));
  }
}
