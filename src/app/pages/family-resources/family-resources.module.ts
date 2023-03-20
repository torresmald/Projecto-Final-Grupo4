import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyResourcesRoutingModule } from './family-resources-routing.module';
import { FamilyResourcesComponent } from './family-resources.component';
import { ResourceComponent } from './resource/resource.component';


@NgModule({
  declarations: [
    FamilyResourcesComponent,
    ResourceComponent
  ],
  imports: [
    CommonModule,
    FamilyResourcesRoutingModule
  ]
})
export class FamilyResourcesModule { }
