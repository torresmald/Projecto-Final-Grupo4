import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeachersService } from '../../services/teachers/teachers.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router, private logoutService: TeachersService){

  }
  public logout() {
    this.logoutService.logout();
    this.router.navigate(['']);
  }
}
