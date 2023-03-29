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

/* el módulo declara el componente "AboutComponent", y además importa otros módulos como "CommonModule", "AboutRoutingModule", "CarouselModule" y "TranslateModule". También se define el esquema de validación "NO_ERRORS_SCHEMA", que permite omitir los errores de validación para los elementos desconocidos en las plantillas de los componentes. */