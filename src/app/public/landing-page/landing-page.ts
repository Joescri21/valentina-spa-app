import { Component } from '@angular/core';
import { Navbar } from "../components/navbar/navbar";
import { Home } from "../components/home/home";

@Component({
  selector: 'landing-page',
  imports: [
    Navbar,
    Home
  ],
  templateUrl: './landing-page.html',
})
export class LandingPage { }
