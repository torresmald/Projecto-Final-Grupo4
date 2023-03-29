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

/* Este código es un módulo que importa y declara un componente llamado "MessagesTeachersComponent" y configura las dependencias necesarias para su funcionamiento. Las dependencias importadas son RouterModule y MessagesTeachersComponent. Además, se exporta el módulo "MessagesTeachersRoutingModule".*/
