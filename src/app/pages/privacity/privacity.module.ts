import { TranslateModule } from '@ngx-translate/core';
import { PrivacityRoutingModule } from './privacity-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacityComponent } from './privacity.component';



@NgModule({
  declarations: [
    PrivacityComponent
  ],
  imports: [
    CommonModule,
    PrivacityRoutingModule,
    TranslateModule
  ]
})
export class PrivacityModule { }

/* Este código es un módulo que importa y declara un componente llamado "PrivacityComponent" y configura las dependencias necesarias para su funcionamiento. Las dependencias importadas son CommonModule, PrivacityRoutingModule y TranslateModule. Además, se exporta el módulo "PrivacityModule".*/
