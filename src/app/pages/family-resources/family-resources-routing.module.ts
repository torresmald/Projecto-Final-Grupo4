import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyResourcesComponent } from './family-resources.component';

const routes: Routes = [
  {
    path:'',
    component: FamilyResourcesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyResourcesRoutingModule { }
