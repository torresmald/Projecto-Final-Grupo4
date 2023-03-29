import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/canActivate/auth.guard';
import { MyAccountComponent } from './my-account.component';

const routes: Routes = [{
  path: '',
  component: MyAccountComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }

/* El código define y exporta una clase  llamada MyAccountRoutingModule que se encarga de manejar las rutas que estarán disponibles para el componente MyAccountComponent. Las rutas definidas son solo una, la cual está protegida por un guardia AuthGuard. La ruta apunta al componente MyAccountComponent y es importado el RouterModule del módulo @angular/router para habilitar la navegación dentro de la aplicación mediante urls amigables y el módulo de rutas.*/
