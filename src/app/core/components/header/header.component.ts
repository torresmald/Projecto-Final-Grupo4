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
  ngOnInit(): void {
    this.logoutService.userLogged$.subscribe(
      (isLoggedUser) => (this.isLogged = isLoggedUser)
    );
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    if (userPrefersDark) {
      this.setThema('dark')
    }
    if (userPrefersLight) {
      this.setThema('light')
    }
  }
  public setThema(theme: string) {
    document.documentElement.className = theme;
  }
  public logout() {
    this.logoutService.logout();
    this.logoutService.userLogged$.next(false);
    this.router.navigate(['']);
  }
}
