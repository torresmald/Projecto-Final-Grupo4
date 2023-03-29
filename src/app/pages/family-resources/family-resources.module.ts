import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyResourcesRoutingModule } from './family-resources-routing.module';
import { FamilyResourcesComponent } from './family-resources.component';
import { SongsComponent } from './songs/songs.component';
import { BooksComponent } from './books/books.component';
import { LogicalMathActivitiesComponent } from './logical-math-activities/logical-math-activities.component';
import { ReadingWritingActivitiesComponent } from './reading-writing-activities/reading-writing-activities.component';
import { EnglishActivitiesComponent } from './english-activities/english-activities.component';
import { ThematicProgrammingComponent } from './thematic-programming/thematic-programming.component';
import { BookComponent } from './books/book/book.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    FamilyResourcesComponent,
    SongsComponent,
    BooksComponent,
    LogicalMathActivitiesComponent,
    ReadingWritingActivitiesComponent,
    EnglishActivitiesComponent,
    ThematicProgrammingComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    FamilyResourcesRoutingModule,
    TranslateModule
  ]
})
export class FamilyResourcesModule { }
/*  importa y declara componentes para la sección de recursos familiares de una aplicación. El módulo importa y usa el módulo de ruteo de la sección, y también el módulo de traducción para permitir la internacionalización.*/