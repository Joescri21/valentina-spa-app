import { Component } from '@angular/core';
import { Navbar } from "../components/navbar/navbar";
import { Home } from "../components/home/home";
import { Promociones } from "../components/promociones/promociones";
import { Catalogo } from "../components/catalogo/catalogo";
import { Footer } from "../components/footer/footer";
import { Contact } from "../components/contact/contact";

@Component({
  selector: 'landing-page',
  imports: [
    Navbar,
    Home,
    Promociones,
    Catalogo,
    Footer,
    Contact
],
  templateUrl: './landing-page.html',
})
export class LandingPage { }
