import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/canActivate/auth.guard';
import { MessagesTeachersComponent } from './messages-teachers.component';

const routes: Routes = [
  {
    path:'',
    component: MessagesTeachersComponent,
    canActivate: [AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesTeachersRoutingModule { }
