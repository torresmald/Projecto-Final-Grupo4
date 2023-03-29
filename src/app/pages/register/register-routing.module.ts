import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/canActivate/auth.guard';
import { RegisterComponent } from './register.component';

const routes: Routes = [

  {
    path: '',
    component: RegisterComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }

/* Este código es un módulo que importa y declara un componente llamado "RegisterComponent" y configura las dependencias necesarias para su funcionamiento. Las dependencias importadas son RouterModule y RegisterComponent. Además, se exporta el módulo "RegisterRoutingModule".*/
