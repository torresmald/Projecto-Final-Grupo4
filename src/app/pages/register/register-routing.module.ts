import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FamiliesComponent } from './families/families.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [

  {
    path: 'families',
    component: FamiliesComponent
  },
  {
    path: 'teachers',
    component: TeachersComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
