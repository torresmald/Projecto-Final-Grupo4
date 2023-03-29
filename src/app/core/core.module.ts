import { Notifications } from 'src/app/core/models/Notifications/notifications.model';
import { RouterModule } from '@angular/router';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoreRoutingModule } from './core-routing.module';
import { NotificationsService } from './services/notifications/notifications.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoadingComponent } from './components/loading/loading.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ModalComponent,
    LoadingComponent,
  ],
  imports: [CommonModule, CoreRoutingModule, RouterModule, TranslateModule,HttpClientModule,],

  exports: [FooterComponent, HeaderComponent,  ModalComponent, LoadingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA], 
  providers: [NotificationsService],
})
export class CoreModule {}

/* Este módulo define los componentes de la aplicación. */