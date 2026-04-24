import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
})
export class Navbar {

  constructor(private router: Router) {} // Inyecta el router

  scrollTo(sectionId: string) {
    if (this.router.url === '/') {
      // Caso A: Ya estás en la Home, solo scrollea
      this.doScroll(sectionId);
    } else {
      // Caso B: Estás en Login, navega primero a Home
      this.router.navigate(['/']).then(() => {
        // Esperamos un poquito a que cargue la Home y scrolleamos
        setTimeout(() => {
          this.doScroll(sectionId);
        }, 100);
      });
    }
  }

  private doScroll(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

