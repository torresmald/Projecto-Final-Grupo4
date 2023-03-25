import { TranslateModule } from '@ngx-translate/core';
import { PrivacityRoutingModule } from './privacity-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacityComponent } from './privacity.component';



@NgModule({
  declarations: [
    PrivacityComponent
  ],
  imports: [
    CommonModule,
    PrivacityRoutingModule,
    TranslateModule
  ]
})
export class PrivacityModule { }
