import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from "@angular/router";
import { Auth } from '../../../../core/services/authServices';

@Component({
  selector: 'client-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterModule
  ],
  templateUrl: './client-navbar.html',
})
export class ClientNavbar {
  private authService = inject(Auth);
  private router = inject(Router);

  logout() {
    this.authService.logout();
  }
}
