import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FamilyViewRoutingModule } from './family-view-routing.module';
import { FamilyViewComponent } from './family-view.component';


@NgModule({
  declarations: [
    FamilyViewComponent
  ],
  imports: [
    CommonModule,
    FamilyViewRoutingModule,
    TranslateModule,
    FormsModule,
    SharedModule
  ]
})
export class FamilyViewModule { }

/* Este código es un módulo que importa y declara un componente llamado "FamilyViewComponent" y configura las dependencias necesarias para su funcionamiento. Las dependencias importadas son FormsModule, TranslateModule, CommonModule y FamilyViewRoutingModule. Además, se exporta el módulo "FamilyViewModule".*/
