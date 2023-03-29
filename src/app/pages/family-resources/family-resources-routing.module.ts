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

/* Este código es un módulo de enrutamiento . Define las rutas para diferentes componentes que se utilizan en el módulo "FamilyResources". Las rutas incluyen "songs", "books", "math-activities", "reading-and-writing-activities", "english-activities", y "program-activities". Además, se especifica un guardia de autenticación (AuthGuard) que se utiliza para proteger ciertas rutas que requieren que el usuario esté autenticado antes de acceder a ellas. Al final, el módulo se exporta para que pueda ser utilizado en otros componentes o módulos de la aplicación.*/