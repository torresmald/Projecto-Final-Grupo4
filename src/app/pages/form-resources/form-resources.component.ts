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
      this.router.navigate(['teacherView'])
    })
  }
}
/* Este código es un componente  que define una clase llamada FormResourcesComponent. Este tiene un formulario FormGroup y utiliza el servicio ResourcesService para crear un recurso cuando se hace clic en el botón createNewResource. Una vez que esto ocurre, se restablece el formulario y se redirige a la vista 'teacherView'. Además, este componente utiliza FormBuilder para construir los controles del formulario FormControl y Router para manejar las rutas de la aplicación.*/