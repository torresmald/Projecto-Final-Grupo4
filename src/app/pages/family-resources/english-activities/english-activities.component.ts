import { Component } from '@angular/core';
import { Resources } from 'src/app/core/models/Resources/transformed/resources.model';
import { ResourcesService } from 'src/app/core/services/resources/resources.service';

@Component({
  selector: 'app-english-activities',
  templateUrl: './english-activities.component.html',
  styleUrls: ['./english-activities.component.scss']
})
export class EnglishActivitiesComponent {
  public englishActivities: Resources[] = [];

  constructor(private resourcesService: ResourcesService) {
    this.resourcesService.getResources().subscribe((resources) => {
      this.englishActivities = resources.filter((resource) => resource.type === 'english activities');
    });
  }

  seeImage(src: string): void {
    const link = document.createElement('a');
    link.href = src;
    link.target = '_blank'
    link.click();
  }
}
/*  El componente carga una lista de recursos de un servicio llamado "ResourcesService" y filtra los recursos para mostrar solo aquellos que tienen el tipo "actividades en inglés". La lista de recursos filtrados se almacena en la variable "englishActivities".

El componente también tiene una función llamada "seeImage" que crea un enlace para abrir la imagen en una nueva pestaña cuando se hace clic en el botón de descarga en una de las tarjetas de actividad. */