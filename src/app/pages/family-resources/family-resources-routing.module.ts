import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/canActivate/auth.guard';
import { BooksComponent } from './books/books.component';
import { FamilyResourcesComponent } from './family-resources.component';
import { SongsComponent } from './songs/songs.component';
import { LogicalMathActivitiesComponent } from './logical-math-activities/logical-math-activities.component';
import { ReadingWritingActivitiesComponent } from './reading-writing-activities/reading-writing-activities.component';
import { EnglishActivitiesComponent } from './english-activities/english-activities.component';
import { ThematicProgrammingComponent } from './thematic-programming/thematic-programming.component';

const routes: Routes = [
  {
    path:'',
    component: FamilyResourcesComponent,
    canActivate: [AuthGuard]

  },
  {
    path:'songs',
    component: SongsComponent,
    canActivate: [AuthGuard]

  },
  {
    path:'books',
    component: BooksComponent,
    canActivate: [AuthGuard]

  },
  {
    path:'math-activities',
    component: LogicalMathActivitiesComponent
  },
  {
    path:'reading-and-writing-activities',
    component: ReadingWritingActivitiesComponent
  },
  {
    path:'english-activities',
    component: EnglishActivitiesComponent
  },
  {
    path:'program-activities',
    component: ThematicProgrammingComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyResourcesRoutingModule { }
