import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";

@Component({
  selector: 'client-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterModule
  ],
  templateUrl: './client-navbar.html',
})
export class ClientNavbar { }
