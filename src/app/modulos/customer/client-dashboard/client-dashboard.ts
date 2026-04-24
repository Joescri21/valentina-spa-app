import { Component } from '@angular/core';
import { Calendario } from "../components/calendario/calendario";

@Component({
  selector: 'app-client-dashboard',
  imports: [
    Calendario
  ],
  templateUrl: './client-dashboard.html',
})
export class ClientDashboard { }
