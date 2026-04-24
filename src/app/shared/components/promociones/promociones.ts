import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-promociones',
  imports: [
    RouterLink,
    CommonModule,
    RouterModule
  ],
  templateUrl: './promociones.html',
})
export class Promociones { }
