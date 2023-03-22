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
