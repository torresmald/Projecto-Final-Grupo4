import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';

import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
  ]
})
export class HomeModule { }
/* Este código es un módulo que importa y declara un componente llamado "HomeComponent" y configura las dependencias necesarias para su funcionamiento. Las dependencias importadas son CommonModule, HomeRoutingModule y TranslateModule. Además, se exporta el módulo "HomeModule".*/