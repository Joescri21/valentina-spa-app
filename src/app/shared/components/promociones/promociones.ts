import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from "@angular/router";
import { ServicioService, Servicio } from '../../../core/services/servicio.service';

@Component({
  selector: 'app-promociones',
  imports: [
    RouterLink,
    CommonModule,
    RouterModule
  ],
  templateUrl: './promociones.html',
})
export class Promociones implements OnInit {
  private servicioService = inject(ServicioService);
  private router = inject(Router);

  servicios: Servicio[] = [];

  ngOnInit() {
    this.servicios = this.servicioService.obtenerServicios();
  }

  seleccionarServicio(servicio: Servicio) {
    this.servicioService.seleccionarServicio(servicio);
    // Redirigir al dashboard de cliente con el servicio seleccionado
    this.router.navigate(['/client-dashboard/home']);
  }
}
