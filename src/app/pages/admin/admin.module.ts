import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

/*El módulo se llama "AdminModule" y está marcado con la decoración "@NgModule". Dentro del objeto de la decoración, se declaran los componentes que pertenecerán a este módulo y se importan otros módulos necesarios. En este caso, el módulo "CommonModule" y el "AdminRoutingModule". */