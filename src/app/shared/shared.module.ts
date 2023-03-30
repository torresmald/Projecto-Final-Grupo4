import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { PaginatePipe } from './pipes/paginate/paginate.pipe';
import { FilterNamePipe } from './pipes/filter/filter-name.pipe';
import { SortNamePipe } from './pipes/filter/sort-name.pipe';

@NgModule({
  declarations: [AlertComponent, ScrollToTopComponent, PaginatePipe, FilterNamePipe, SortNamePipe],
  imports: [CommonModule],

  exports: [
    ScrollToTopComponent, 
    AlertComponent,
    PaginatePipe,
    FilterNamePipe,
    SortNamePipe
  ],
})
export class SharedModule { }

/* Este es el archivo que se encuentra en la carpeta de shared, en el cual se encuentran los componentes que se utilizan en varias páginas. En este archivo se encuentran los pipes que se utilizan para filtrar y ordenar los datos de las tablas. */
