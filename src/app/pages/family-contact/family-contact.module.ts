import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyContactRoutingModule } from './family-contact-routing.module';
import { FamilyContactComponent } from './family-contact.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FamilyContactComponent
  ],
  imports: [
    CommonModule,
    FamilyContactRoutingModule,
    FormsModule
  ]
})
export class FamilyContactModule { }
