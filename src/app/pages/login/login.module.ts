import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    TranslateModule
  ]
})
export class LoginModule { }
/* Este código es un módulo que importa y declara un componente llamado "LoginComponent" y configura las dependencias necesarias para su funcionamiento. Las dependencias importadas son CommonModule, LoginRoutingModule, ReactiveFormsModule, RouterModule, SharedModule y TranslateModule. Además, se exporta el módulo "LoginModule".*/