import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-catalogo',
  imports: [
    RouterLink,
    CommonModule,
    RouterModule
  ],
  templateUrl: './catalogo.html',
})
export class Catalogo { }
