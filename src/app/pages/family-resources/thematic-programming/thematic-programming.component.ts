import { Component } from '@angular/core';
import { Resources } from 'src/app/core/models/Resources/transformed/resources.model';
import { ResourcesService } from 'src/app/core/services/resources/resources.service';

@Component({
  selector: 'app-thematic-programming',
  templateUrl: './thematic-programming.component.html',
  styleUrls: ['./thematic-programming.component.scss']
})
export class ThematicProgrammingComponent {
  public programmingActivities?: Resources[];
  
  constructor(private resourcesService: ResourcesService) {
    this.resourcesService.getResources().subscribe((resources) => this.programmingActivities = resources.filter((resource) => resource.type === 'thematic programming'))
  }

  seeImage(src: string): void {
    const link = document.createElement('a');
    link.href = src;
    link.target = '_blank'
    link.click();
  }

}
/* Este es un componente que tiene una propiedad "programmingActivities" que representa una lista de recursos temáticos de programación. El constructor del componente llama al método "getResources()" del servicio "ResourcesService" para obtener la lista de recursos y luego filtra los recursos que tienen el tipo "thematic programming". Además, hay un método "seeImage()" que toma una fuente de imagen como argumento y abre un enlace de esa imagen en una nueva pestaña del navegador cuando se hace clic en un botón de descarga en la vista del componente.*/

