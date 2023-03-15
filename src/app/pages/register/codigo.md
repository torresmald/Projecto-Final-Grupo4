COMPONENTE

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  public userRegister?: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private activatedRouted: ActivatedRoute,
    
  ){
    this.createNewForm();
  }

  public createNewForm(){
    this.userRegister = this.fb.group({
      Usuario: new FormControl('', [Validators.required]),
      Contraseña: new FormControl('', [Validators.required])
    });
  }

  public goToMyView(){
    console.log('funciona?');
    
  } 
}


HTML


<p>register-form works!</p>

<form [formGroup]="userRegister"    >

    <label>Usuario</label>
    <input type="text" formControlName="Usuario" required>
  
    <label>Contraseña</label>
    <input type="password" formControlName="Contraseña" required>
  
    <button type="submit">Submit</button>
</form>
