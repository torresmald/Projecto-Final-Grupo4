import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'proyecto-final-grupo4';
  constructor(public _router: Router) {}

  ngOnInit(): void {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart && event.url == '/notifications') {
        setTimeout(() => {
          window.scroll(0, window.scrollY + 200);
        }, 40);
      }
    });
  }
}
/* Este código define un componente de aplicación llamado 'app-root'. El componente tiene un título y un constructor que recibe el router. El componente implementa la interfaz OnInit para ejecutar una función cuando el componente se inicializa. La función se suscribe a los eventos del router y si el evento es una navegación al componente de notificaciones, se ejecuta una función que hace scroll a la página. */