import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeachersService } from '../../services/teachers/teachers.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public isLogged: boolean = false;
  constructor(private router: Router, private logoutService: TeachersService){

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
