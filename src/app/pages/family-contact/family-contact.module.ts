import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyContactRoutingModule } from './family-contact-routing.module';
import { FamilyContactComponent } from './family-contact.component';


@NgModule({
  declarations: [
    FamilyContactComponent
  ],
  imports: [
    CommonModule,
    FamilyContactRoutingModule
  ]
})
export class FamilyContactModule { }
