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
