import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyResourcesRoutingModule } from './family-resources-routing.module';
import { FamilyResourcesComponent } from './family-resources.component';
import { SongsComponent } from './songs/songs.component';
import { BooksComponent } from './books/books.component';


@NgModule({
  declarations: [
    FamilyResourcesComponent,
    SongsComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    FamilyResourcesRoutingModule
  ]
})
export class FamilyResourcesModule { }
