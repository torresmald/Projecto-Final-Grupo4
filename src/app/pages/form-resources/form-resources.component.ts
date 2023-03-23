import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Resources, ResourcesType } from 'src/app/core/models/Resources/resources.types';
import { ResourcesService } from 'src/app/core/services/resources/resources.service';

@Component({
  selector: 'app-form-resources',
  templateUrl: './form-resources.component.html',
  styleUrls: ['./form-resources.component.scss']
})
export class FormResourcesComponent {
  public resourcesForm?: FormGroup;
  public types?: ResourcesType[] = Resources;
  constructor(
    private formBuilder: FormBuilder, 
    private resourcesService: ResourcesService,
    private router: Router
    ){
      this.resourcesForm = this.formBuilder.group({
        title: new FormControl(''),
        description: new FormControl(''),
        link: new FormControl(''),
        type: new FormControl('')
      })
  }
  public createNewResource(){
    const resourceRequest = this.resourcesService.createResource(this.resourcesForm?.value).subscribe(() => {
      this.resourcesForm?.reset();
      this.router.navigate(['resources'])
    })
  }
}
