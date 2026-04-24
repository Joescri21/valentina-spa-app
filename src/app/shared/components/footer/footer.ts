import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink,
    CommonModule,
    RouterModule
  ],
  templateUrl: './footer.html',
})
export class Footer { }
