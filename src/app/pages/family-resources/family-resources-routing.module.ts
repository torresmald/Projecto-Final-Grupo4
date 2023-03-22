import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/canActivate/auth.guard';
import { BooksComponent } from './books/books.component';
import { FamilyResourcesComponent } from './family-resources.component';
import { SongsComponent } from './songs/songs.component';

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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyResourcesRoutingModule { }
