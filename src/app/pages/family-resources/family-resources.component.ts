import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resources } from 'src/app/core/models/Resources/transformed/resources.model';
import { ResourcesService } from 'src/app/core/services/resources/resources.service';

@Component({
  selector: 'app-family-resources',
  templateUrl: './family-resources.component.html',
  styleUrls: ['./family-resources.component.scss']
})
export class FamilyResourcesComponent implements OnInit {
  public resources?: Resources[] = [];
  public videoResources?: Resources[] = [];
  
  constructor(private resourcesService: ResourcesService, private router: Router){

  }
  ngOnInit(): void {
      this.resourcesService.getResources().subscribe((resource) => this.resources = resource);
      this.videoResources = this.resources?.filter((resource) => resource.type === 'songs');
      console.log(this.videoResources);
  }
}
