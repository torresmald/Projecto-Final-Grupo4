import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyViewComponent } from './family-view.component';

const routes: Routes = [
  {
    path:'',
    component: FamilyViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyViewRoutingModule { }
