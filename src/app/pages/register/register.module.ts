import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule {}

/* Este código es un módulo que importa y declara un componente llamado "RegisterComponent" y configura las dependencias necesarias para su funcionamiento. Las dependencias importadas son CommonModule, RegisterRoutingModule y ReactiveFormsModule. Además, se exporta el módulo "RegisterModule".*/


