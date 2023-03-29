import { Component, OnInit } from '@angular/core';
import { Resources } from 'src/app/core/models/Resources/transformed/resources.model';
import { ResourcesService } from 'src/app/core/services/resources/resources.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  public books: Resources[] = [];
  constructor(private resourcesService: ResourcesService) {}
 
  ngOnInit(): void {
    this.resourcesService.getResources().subscribe((resources: Resources[]) => {
      this.books = resources.filter((resource) => resource.type === 'books');
    });
  }
}
/* este es el código para crear una matriz de objetos "Resources", el cual acepta un argumento "resourcesService" de tipo "ResourcesService" en su constructor:El constructor toma un argumento llamado "resourcesService" que es del tipo "ResourcesService". 


El método ngOnInit() se ejecuta cuando el componente se inicializa. Aquí, se llama al método "getResources()" del servicio "resourcesService". Este método devuelve un observable y utiliza el método "subscribe()" para suscribirse a los resultados. Los resultados (objetos "Resources") se filtran por el tipo "books" y se asignan a la propiedad "books" del componente. 


La plantilla asociada a este componente es "./books.component.html" y tiene estilos definidos en "./books.component.scss".*/

