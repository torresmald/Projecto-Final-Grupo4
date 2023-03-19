import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [AlertComponent, ScrollToTopComponent],
  imports: [CommonModule],

  exports: [ScrollToTopComponent, AlertComponent ],
})
export class SharedModule {}
