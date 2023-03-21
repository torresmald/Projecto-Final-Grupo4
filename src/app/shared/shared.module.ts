import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { PaginatePipe } from './pipes/paginate/paginate.pipe';

@NgModule({
  declarations: [AlertComponent, ScrollToTopComponent, PaginatePipe],
  imports: [CommonModule],

  exports: [
    ScrollToTopComponent, 
    AlertComponent,
    PaginatePipe
  ],
})
export class SharedModule { }
