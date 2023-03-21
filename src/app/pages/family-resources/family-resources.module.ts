import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyResourcesRoutingModule } from './family-resources-routing.module';
import { FamilyResourcesComponent } from './family-resources.component';
import { ResourceComponent } from './resource/resource.component';
import { SongsComponent } from './songs/songs.component';


@NgModule({
  declarations: [
    FamilyResourcesComponent,
    ResourceComponent,
    SongsComponent
  ],
  imports: [
    CommonModule,
    FamilyResourcesRoutingModule
  ]
})
export class FamilyResourcesModule { }
