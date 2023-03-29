import { Component } from '@angular/core';
import { Resources } from 'src/app/core/models/Resources/transformed/resources.model';
import { ResourcesService } from 'src/app/core/services/resources/resources.service';

@Component({
  selector: 'app-reading-writing-activities',
  templateUrl: './reading-writing-activities.component.html',
  styleUrls: ['./reading-writing-activities.component.scss']
})
export class ReadingWritingActivitiesComponent {
  public readingWritingActivities: Resources[] = [];
  
  constructor(private resourcesService: ResourcesService) {
    this.resourcesService.getResources().subscribe((resources) => this.readingWritingActivities = resources.filter((resource) => resource.type === 'reading and writing activities'))
  }

  seeImage(src: string): void {
    const link = document.createElement('a');
    link.href = src;
    link.target = '_blank'
    link.click();
  }
}
/* Importa Component de '@angular/core', Resources y ResourcesService de modelos y servicios de la aplicación, respectivamente.
Define una clase ReadingWritingActivitiesComponent que es un componente de Angular.
Declara una propiedad pública readingWritingActivities que almacena una lista de recursos (Resources) que se utilizará en la página.
Define un constructor que inicializa la propiedad readingWritingActivities utilizando el servicio de recursos (ResourcesService).
Define un método seeImage que crea un enlace y lo abre en una nueva ventana.
Exporta la clase ReadingWritingActivitiesComponent para que pueda ser utilizada en otros archivos.*/