import { Component, OnInit } from '@angular/core';
import { Resources } from 'src/app/core/models/Resources/transformed/resources.model';
import { ResourcesService } from 'src/app/core/services/resources/resources.service';

@Component({
  selector: 'app-logical-math-activities',
  templateUrl: './logical-math-activities.component.html',
  styleUrls: ['./logical-math-activities.component.scss']
})
export class LogicalMathActivitiesComponent {
  public mathActivities: Resources[] = [];
  
  constructor(private resourcesService: ResourcesService) {
    this.resourcesService.getResources().subscribe((resources) => this.mathActivities = resources.filter((resource) => resource.type === 'logical math activities'))
  }

  seeImage(src: string): void {
    const link = document.createElement('a');
    link.href = src;
    link.target = '_blank'
    link.click();
  }
}