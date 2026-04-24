import { Component } from '@angular/core';
import { Navbar } from "../../shared/components/navbar/navbar";
import { Home } from "../../shared/components/home/home";
import { Promociones } from "../../shared/components/promociones/promociones";
import { Catalogo } from "../../shared/components/catalogo/catalogo";
import { Contact } from "../../shared/components/contact/contact";
import { Footer } from "../../shared/components/footer/footer";


@Component({
  selector: 'landing-page',
  imports: [
    Navbar,
    Home,
    Promociones,
    Catalogo,
    Contact,
    Footer
],
  templateUrl: './landing-page.html',
})
export class LandingPage { }
