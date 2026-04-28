import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from "@angular/router";
import { ServicioService, Servicio } from '../../../core/services/servicio.service';

@Component({
  selector: 'app-catalogo',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './catalogo.html',
})
export class Catalogo {
  private servicioService = inject(ServicioService);
  private router = inject(Router);

  servicios: Servicio[] = [
    {
      id: 1,
      nombre: 'Gelish',
      descripcion: 'Incluye exfoliación, manicura en seco, Gel a un solo tono, si quiere algún diseño costo adicional',
      imagen: 'Gelish.jpg',
      duracion: 60,
      precio: 350
    },
    {
      id: 2,
      nombre: 'Manicura Valentina',
      descripcion: 'Incluye exfoliación y masaje',
      imagen: 'manicura.jpg',
      duracion: 60,
      precio: 450
    },
    {
      id: 3,
      nombre: 'Soft Gel',
      descripcion: 'Incluye exfoliación, manicura en seco, uña soft gel a un tono, costo extra por diseño',
      imagen: 'soft-gel.jpg',
      duracion: 30,
      precio: 500
    },
    {
      id: 4,
      nombre: 'Planchado de cejas',
      descripcion: 'Incluye planchado de cejas',
      imagen: 'planchado.jpg',
      duracion: 90,
      precio: 200
    },
    {
      id: 5,
      nombre: 'Uñas Acrílicas',
      descripcion: 'Incluye exfoliación, manicura en seco, uña Acrílicas en un tono, costo extra por diseño',
      imagen: 'acrilico.jpg',
      duracion: 120,
      precio: 600
    },
    {
      id: 6,
      nombre: 'Pedicure Valentina',
      descripcion: 'Incluye exfoliación y masaje',
      imagen: 'pedicure.jpg',
      duracion: 90,
      precio: 400
    }
  ];

  seleccionarServicio(servicio: Servicio) {
    this.servicioService.seleccionarServicio(servicio);
    this.router.navigate(['/client-dashboard/home']);
  }
}
