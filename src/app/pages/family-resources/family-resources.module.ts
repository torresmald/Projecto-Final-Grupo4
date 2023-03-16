import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyResourcesRoutingModule } from './family-resources-routing.module';
import { FamilyResourcesComponent } from './family-resources.component';


@NgModule({
  declarations: [
    FamilyResourcesComponent
  ],
  imports: [
    CommonModule,
    FamilyResourcesRoutingModule
  ]
})
export class FamilyResourcesModule { }
