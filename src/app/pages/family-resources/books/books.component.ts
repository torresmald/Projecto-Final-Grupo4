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
