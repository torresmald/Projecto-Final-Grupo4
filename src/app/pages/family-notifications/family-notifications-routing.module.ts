import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyNotificationsComponent } from './family-notifications.component';

const routes: Routes = [
  {
    path:'',
    component: FamilyNotificationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyNotificationsRoutingModule { }
