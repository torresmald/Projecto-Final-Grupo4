import { TranslateModule } from '@ngx-translate/core';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './components/about.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    CarouselModule,
    TranslateModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
})
export class AboutModule { }
