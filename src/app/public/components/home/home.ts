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

    // Seleccionamos el contenedor del carrusel
    const container = document.querySelector('.carousel');
    const slide = document.getElementById(`item${this.currentSlide}`);

    if (container && slide) {
      // Calculamos la posición del slide respecto al contenedor, no a la pantalla
      const leftPosition = slide.offsetLeft;

      // Movemos el scroll del contenedor manualmente
      container.scrollTo({
        left: leftPosition,
        behavior: 'smooth'
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
