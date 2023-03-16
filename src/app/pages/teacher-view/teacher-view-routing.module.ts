import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherViewComponent } from './teacher-view.component';

const routes: Routes = [
  {
    path:'',
    component: TeacherViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherViewRoutingModule { }
