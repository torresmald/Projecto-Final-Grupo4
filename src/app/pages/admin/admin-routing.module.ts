import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  
  {
    path: '',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class AdminRoutingModule { }
/*
Este código define las rutas para el módulo de admin . La ruta ' ' se asigna al componente AdminComponent. Luego, el AdminRoutingModule se importa en el módulo AdminModule y se exporta para que pueda ser utilizado por otros módulos de la aplicación.
*/