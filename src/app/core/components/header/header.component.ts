import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TeachersService } from '../../services/teachers/teachers.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public isLogged: boolean = false;
  langs: string[] = [];

  constructor(private router: Router, private logoutService: TeachersService, public translate: TranslateService){
    translate.setDefaultLang('es');
    translate.use('es'), this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();
  }
  changeLang(lang: string) {
    this.translate.use(lang)
  }
  ngOnInit(): void {
      this.logoutService.userLogged$.subscribe((isLoggedUser) => this.isLogged = isLoggedUser)
  }
  public logout() {
    this.logoutService.logout();
    this.logoutService.userLogged$.next(false);
    this.router.navigate(['']);
  }
}
