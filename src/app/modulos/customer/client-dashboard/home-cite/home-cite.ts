import { Component } from '@angular/core';
import { Citas } from "../../components/citas/citas";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-cite',
  imports: [
    Citas,
    RouterModule
  ],
  templateUrl: './home-cite.html',
})
export class HomeCite { }
