import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TeachersService } from '../../services/teachers/teachers.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isLogged: boolean = false;
  public langs: string[] = [];
  public theme?: string 

  constructor(
    private router: Router,
    private logoutService: TeachersService,
    public translate: TranslateService
  ) {
    translate.setDefaultLang('es');
    translate.use('es'), this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();
  }
  public changeLang(lang: string) {
    this.translate.use(lang);
  }
   
  /* este código inicializa y configura el servicio de traducción y proporciona un método para cambiar el idioma activo en la aplicación.*/
  ngOnInit(): void {
    this.logoutService.userLogged$.subscribe(
      (isLoggedUser) => (this.isLogged = isLoggedUser)
    );
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    if (userPrefersDark) {
      console.log(userPrefersDark);
      
      this.theme = 'dark'
    }
    if (userPrefersLight) {
      this.theme = 'light'
    }
  }
  
  //Configura tema y suscripción de inicio de sesión del usuario.//
  public setThema() {
    
    if(this.theme === 'dark'){

      document.documentElement.className = 'light';
      this.theme = 'light'

    }else {
      document.documentElement.className = 'dark';
      this.theme = 'dark'
    }
   
  }

  public logout() {
    this.logoutService.logout();
    this.logoutService.userLogged$.next(false);
    this.router.navigate(['']);
  }
}
