import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
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
