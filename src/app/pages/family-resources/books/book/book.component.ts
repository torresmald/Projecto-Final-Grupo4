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
/* Es un componente  que muestra un libro y puede ser usado como una directiva en la plantilla HTML. Utiliza la clase Resources importada desde el archivo resources.model.ts. También incluye una función "open ()" que cambia la variable de estado "isOpen" cuando se usa. Además, tiene una propiedad de entrada "@Input()" llamada "books" que recibe datos del componente padre. El archivo HTML correspondiente se encuentra en el archivo book.component.html y tiene estilos de SCSS en el archivo book.component.scss.*/