import { ContactComponent } from './contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContactRoutingModule { }
/* Este código define las rutas para el módulo de contacto. La ruta ' ' se asigna al componente ContactComponent. Luego, el ContactRoutingModule se importa en el módulo ContactModule y se exporta para que pueda ser utilizado por otros módulos de la aplicación.*/