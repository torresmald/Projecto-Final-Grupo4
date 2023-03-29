import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/canActivate/auth.guard';
import { StudentDetailComponent } from './student-detail.component';

const routes: Routes = [
  {
    path: '',
    component: StudentDetailComponent,
    canActivate: [AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentDetailRoutingModule { }

/* Este código es un módulo que importa y declara un componente llamado "StudentDetailComponent" y configura las dependencias necesarias para su funcionamiento. Las dependencias importadas son RouterModule y StudentDetailComponent. Además, se exporta el módulo "StudentDetailRoutingModule".*/
