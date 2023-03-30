import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [{
  path:'',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule { }

/* Este código es un módulo que importa y declara un componente llamado "NotFoundComponent" y configura las dependencias necesarias para su funcionamiento. Las dependencias importadas son RouterModule y NotFoundComponent. Además, se exporta el módulo "NotFoundRoutingModule".*/