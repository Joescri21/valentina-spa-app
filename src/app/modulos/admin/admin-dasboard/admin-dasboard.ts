import { Component, inject } from '@angular/core';
import { Auth } from '../../../core/services/authServices';

@Component({
  selector: 'app-admin-dasboard',
  imports: [],
  templateUrl: './admin-dasboard.html',
})
export class AdminDasboard {
  private authService = inject(Auth);

  logout() {
    this.authService.logout();
  }
}
