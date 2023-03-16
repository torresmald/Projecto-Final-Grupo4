import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiParentsService } from 'src/app/core/services/parents/api/api-parents.service';

@Component({
  selector: 'app-families',
  templateUrl: './families.component.html',
  styleUrls: ['./families.component.scss'],
})
export class FamiliesComponent {
  public userRegister?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activatedRouted: ActivatedRoute,
  ) {
    this.createNewForm();
  }

  public createNewForm() {
    this.userRegister = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  
}
