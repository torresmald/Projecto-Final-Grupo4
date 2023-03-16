import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesTeachersComponent } from './messages-teachers.component';

const routes: Routes = [
  {
    path:'',
    component: MessagesTeachersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesTeachersRoutingModule { }
