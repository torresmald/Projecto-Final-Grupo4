import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherContactComponent } from './teacher-contact.component';

const routes: Routes = [{
  path: '',
  component: TeacherContactComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherContactRoutingModule { }
