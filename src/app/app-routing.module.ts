import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('../app/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../app/pages/register/register.module').then(m => m.RegisterModule),
  }, 
  {
    path: '**',
    redirectTo: ''
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





