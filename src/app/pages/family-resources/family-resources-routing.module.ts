import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyResourcesComponent } from './family-resources.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  {
    path:'',
    component: FamilyResourcesComponent
  },
  {
    path:'songs',
    component: SongsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyResourcesRoutingModule { }
