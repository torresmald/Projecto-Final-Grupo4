import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyViewRoutingModule } from './family-view-routing.module';
import { FamilyViewComponent } from './family-view.component';


@NgModule({
  declarations: [
    FamilyViewComponent
  ],
  imports: [
    CommonModule,
    FamilyViewRoutingModule
  ]
})
export class FamilyViewModule { }
