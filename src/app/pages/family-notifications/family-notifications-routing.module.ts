import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/canActivate/auth.guard';
import { FamilyNotificationsComponent } from './family-notifications.component';

const routes: Routes = [
  {
    path:'',
    component: FamilyNotificationsComponent,
    canActivate: [AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyNotificationsRoutingModule { }
/*Este código define una ruta en un módulo de enrutamiento . La ruta tiene la siguiente configuración:

- La ruta está vacía (path: ''), lo que significa que se activará cuando se acceda a la URL base.
- El componente asociado a la ruta es 'FamilyNotificationsComponent'.
- La ruta está protegida por 'AuthGuard', que requiere autenticación para acceder a ella.

El módulo 'FamilyNotificationsRoutingModule' importa 'RouterModule' y configura las rutas usando 'forChild(routes)'. Finalmente, exporta 'RouterModule' para que pueda ser utilizado por otros módulos.*/