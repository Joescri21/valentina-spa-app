import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from "@angular/router";
import { ClientNavbar } from "../components/client-navbar/client-navbar";


@Component({
  selector: 'app-client-dashboard',
  imports: [
    RouterOutlet,
    ClientNavbar,
    RouterModule
],
  templateUrl: './client-dashboard.html',
})
export class ClientDashboard { }
