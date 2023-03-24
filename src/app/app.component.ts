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
