import { StudentsComponent } from './students.component';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule
  ],
 
})
export class StudentsModule { }
