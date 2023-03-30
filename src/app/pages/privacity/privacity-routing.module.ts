import { PrivacityComponent } from './privacity.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PrivacityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PrivacityRoutingModule { }

/* Este código es un módulo que importa y declara un componente llamado "PrivacityComponent" y configura las dependencias necesarias para su funcionamiento. Las dependencias importadas son RouterModule y PrivacityComponent. Además, se exporta el módulo "PrivacityRoutingModule".*/
