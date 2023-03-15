import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { FamiliesComponent } from './families/families.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FamiliesComponent,
    TeachersComponent,
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
