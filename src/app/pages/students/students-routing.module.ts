import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/canActivate/auth.guard';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}

/* Este código es un módulo que importa y declara un componente llamado "StudentsComponent" y configura las dependencias necesarias para su funcionamiento. Las dependencias importadas son RouterModule y StudentsComponent. Además, se exporta el módulo "StudentsRoutingModule".*/
