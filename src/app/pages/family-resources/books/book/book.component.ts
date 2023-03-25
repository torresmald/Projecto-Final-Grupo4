import { Component, Input } from '@angular/core';
import { Resources } from 'src/app/core/models/Resources/transformed/resources.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() public books?: Resources;
  public isOpen: boolean = false;

  open() {
    this.isOpen = !this.isOpen;
  }
}
