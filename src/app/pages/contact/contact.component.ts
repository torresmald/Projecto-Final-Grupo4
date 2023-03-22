import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent{

  public contactForm?: FormGroup; 

  constructor(private buildForm : FormBuilder){
    this.contactForm = new FormGroup({
      name : new FormControl("", Validators.required),
      email : new FormControl("" , Validators.required),
      message : new FormControl("" , Validators.required)
    })
    
    
  }
    
  }
