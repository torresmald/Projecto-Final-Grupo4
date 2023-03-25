import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherContactRoutingModule } from './teacher-contact-routing.module';
import { TeacherContactComponent } from './teacher-contact.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeacherContactComponent
  ],
  imports: [
    CommonModule,
    TeacherContactRoutingModule,
    FormsModule
  ]
})
export class TeacherContactModule { }
