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
}
