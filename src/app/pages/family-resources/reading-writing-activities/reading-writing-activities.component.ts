import { Component } from '@angular/core';
import { Resources } from 'src/app/core/models/Resources/transformed/resources.model';
import { ResourcesService } from 'src/app/core/services/resources/resources.service';

@Component({
  selector: 'app-reading-writing-activities',
  templateUrl: './reading-writing-activities.component.html',
  styleUrls: ['./reading-writing-activities.component.scss']
})
export class ReadingWritingActivitiesComponent {
  public readingActivities?: Resources[];
  constructor(private resourcesService: ResourcesService) {
    this.resourcesService.getResources().subscribe((resources) => this.readingActivities = resources.filter((resource) => resource.type === 'logical math activities'))
  }
}
