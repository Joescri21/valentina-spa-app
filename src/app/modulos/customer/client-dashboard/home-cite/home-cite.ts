import { Component } from '@angular/core';
import { Citas } from "../../components/citas/citas";
import { Calendario } from "../../components/calendario/calendario";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-cite',
  imports: [
    Citas,
    Calendario,
    RouterModule
  ],
  templateUrl: './home-cite.html',
})
export class HomeCite { }
