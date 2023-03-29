import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/canActivate/auth.guard';
import { TeacherViewComponent } from './teacher-view.component';

const routes: Routes = [
  {
    path:'',
    component: TeacherViewComponent,
    canActivate: [AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherViewRoutingModule { }

/* Este código es un módulo que importa y declara un componente llamado "TeacherViewComponent" y configura las dependencias necesarias para su funcionamiento. Las dependencias importadas son RouterModule y TeacherViewComponent. Además, se exporta el módulo "TeacherViewRoutingModule".*/
