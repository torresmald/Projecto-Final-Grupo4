import { Component, OnInit } from '@angular/core';
import { Resources } from 'src/app/core/models/Resources/transformed/resources.model';
import { ResourcesService } from 'src/app/core/services/resources/resources.service';

@Component({
  selector: 'app-family-resources',
  templateUrl: './family-resources.component.html',
  styleUrls: ['./family-resources.component.scss']
})
export class FamilyResourcesComponent implements OnInit {
  constructor(private resourcesService: ResourcesService){}
  public resources?: Resources[] = [];

  
  ngOnInit(): void {
      this.resourcesService.getResources().subscribe((resource) => this.resources = resource);
  }
}
