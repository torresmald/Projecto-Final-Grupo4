import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitGuard } from 'src/app/core/guards/canDeactivate/exit.guard';
import { LoginComponent } from './login.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    canDeactivate: [ExitGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
/* Este código es un módulo que importa y declara un componente llamado "LoginComponent" y configura las dependencias necesarias para su funcionamiento. Las dependencias importadas son RouterModule y LoginComponent. Además, se exporta el módulo "LoginRoutingModule".*/