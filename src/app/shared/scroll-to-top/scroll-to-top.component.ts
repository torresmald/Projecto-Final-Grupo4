import { Component, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent {
  public windowScrolled?: boolean;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
}

/* Este código es un componente  que implementa la funcionalidad "volver arriba" . Escucha el evento de desplazamiento del usuario a través de @HostListener, y hace visible un botón para volver al principio si el usuario se desplaza hacia abajo más allá de cierta posición. Al hacer clic en ese botón, smooth scrolling para llevar al usuario al principio de la página. El código también utiliza @Inject(DOCUMENT) para acceder al objeto Document del DOM que permite interactuar con el HTML y CSS dinámicos generados por la aplicación. */  