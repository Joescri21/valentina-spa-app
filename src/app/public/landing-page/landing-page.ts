import { Component } from '@angular/core';
import { Navbar } from "../components/navbar/navbar";
import { Home } from "../components/home/home";
import { Promociones } from "../components/promociones/promociones";
import { Catalogo } from "../components/catalogo/catalogo";
import { Footer } from "../components/footer/footer";

@Component({
  selector: 'landing-page',
  imports: [
    Navbar,
    Home,
    Promociones,
    Catalogo,
    Footer
],
  templateUrl: './landing-page.html',
})
export class LandingPage { }
