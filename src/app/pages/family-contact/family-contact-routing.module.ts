import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyContactComponent } from './family-contact.component';

const routes: Routes = [
  {
    path:'',
    component: FamilyContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyContactRoutingModule { }
