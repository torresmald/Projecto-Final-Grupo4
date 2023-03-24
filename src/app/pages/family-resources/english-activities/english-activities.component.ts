import { Component } from '@angular/core';
import { Resources } from 'src/app/core/models/Resources/transformed/resources.model';
import { ResourcesService } from 'src/app/core/services/resources/resources.service';

@Component({
  selector: 'app-english-activities',
  templateUrl: './english-activities.component.html',
  styleUrls: ['./english-activities.component.scss']
})
export class EnglishActivitiesComponent {
  public englishActivities?: Resources[];
  constructor(private resourcesService: ResourcesService) {
    this.resourcesService.getResources().subscribe((resources) => this.englishActivities = resources.filter((resource) => resource.type === 'english activities'))
  }
}
