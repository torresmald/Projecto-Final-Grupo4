import { StudentsComponent } from './students.component';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    RouterModule,
  
  ],
 
})
export class StudentsModule { }
