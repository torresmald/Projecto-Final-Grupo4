import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
/* Este código es un módulo que importa y declara un componente llamado "HomeComponent" y configura las dependencias necesarias para su funcionamiento. Las dependencias importadas son RouterModule y HomeComponent. Además, se exporta el módulo "HomeRoutingModule".*/