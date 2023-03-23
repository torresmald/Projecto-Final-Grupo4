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
