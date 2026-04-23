import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
})
export class Home {

  currentSlide = 1;
  totalSlides = 4; // Ajusta según cuántas fotos tengas
  timer: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  startAutoPlay() {
    this.timer = setInterval(() => {
      this.nextSlide();
    }, 4000); // Cambia cada 4 segundos
  }

  nextSlide() {
    this.currentSlide++;
    if (this.currentSlide > this.totalSlides) {
      this.currentSlide = 1;
    }

    // Buscamos el elemento por ID y lo scrolleamos
    const element = document.getElementById(`item${this.currentSlide}`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  }

  ngOnDestroy() {
    // Muy importante limpiar el timer al salir
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

}
