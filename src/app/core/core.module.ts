import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ModalComponent,
    LoadingComponent,
  ],
  imports: [CommonModule, CoreRoutingModule, RouterModule],

  exports: [FooterComponent, HeaderComponent, NavbarComponent, ModalComponent, LoadingComponent],
})
export class CoreModule {}
