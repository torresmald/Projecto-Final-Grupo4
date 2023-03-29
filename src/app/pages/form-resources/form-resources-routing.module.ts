import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormResourcesComponent } from './form-resources.component';

const routes: Routes = [{
  path: '',
  component: FormResourcesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormResourcesRoutingModule { }

/* Este código es un módulo que importa y declara un componente llamado "FormResourcesComponent" y configura las dependencias necesarias para su funcionamiento. Las dependencias importadas son RouterModule y FormResourcesComponent. Además, se exporta el módulo "FormResourcesRoutingModule".*/