import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class ContactModule { }

/* Este modulo define el componente "ContactComponent" y además importa otros módulos como "CommonModule", "ContactRoutingModule", "ReactiveFormsModule" y "TranslateModule". */
