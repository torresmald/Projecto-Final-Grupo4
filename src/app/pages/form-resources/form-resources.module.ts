import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormResourcesRoutingModule } from './form-resources-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormResourcesRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormResourcesModule { }
/* Este código es un módulo que importa y declara un componente llamado "FormResourcesComponent" y configura las dependencias necesarias para su funcionamiento. Las dependencias importadas son CommonModule, FormResourcesRoutingModule y ReactiveFormsModule. Además, se exporta el módulo "FormResourcesModule".*/