import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms';
import { ApiStudentsService } from './../../core/services/students/api/api-students.service';
import { ApiStudents } from 'src/app/core/models/Students/api/api-students.model';
import { ApiTeachersService } from './../../core/services/teachers/api/api-teachers.service';
import { ApiParentsService } from './../../core/services/parents/api/api-parents.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public typeUser?: string;
  public formType?: FormGroup;
  public students?: ApiStudents[];

  constructor(
    private formBuilder: FormBuilder, 
    private serviceStudent: ApiStudentsService,
    private serviceTeacher: ApiTeachersService,
    private serviceParent: ApiParentsService ){

  }

  ngOnInit(): void {
    this.serviceStudent.getAllStudens().subscribe((value) => {
      this.students = value;
    })    
  }

  createUserForm(): void {
    if (this.typeUser === 'student') {
      this.formType = this.formBuilder.group({
        name: [''],
        image: [''],
        phone: [''],
        address: [''],
        date: [''],
        areas: [''],
        diseases: [''],
        nutrition: [''],
        grade: [''],
      });
    } else if (this.typeUser === 'parent') {
      this.formType = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        childs: this.formBuilder.array([], Validators.required),
      });
    } else if (this.typeUser === 'teacher') {
      this.formType = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        name: ['', Validators.required],
        phone: ['', Validators.required],
        idCard: ['', Validators.required],
        grade: ['', Validators.required],
      });
    }
  }

  get childs(): AbstractControl[] {
    return (this.formType?.get('childs') as FormArray).controls;
  }

  setTypeUserForm(type: string) {
    
      this.typeUser = type;
      this.createUserForm();
      
  
  }

  onSelectChild(event: Event) {
    const childId = (event.target as HTMLSelectElement).value;
    const childArray = this.formType?.get('childs') as FormArray;
    if (childArray.length === 0) {
      childArray.push(this.formBuilder.control(childId));
    } else {
      childArray.at(0).setValue(childId);
    }
  }

  onSubmit(): void {
    if (this.formType?.valid) {
      const formData = this.formType.value;
      if (this.typeUser === 'student') {
        console.log(formData);
        this.serviceStudent.postNewStudent(formData).subscribe();
        console.log('agregado estudiante')
      } else if (this.typeUser === 'parent') {
        this.serviceParent.registerApiParent(formData).subscribe();
        console.log('agregado padre')
      } else if (this.typeUser === 'teacher') {
        this.serviceTeacher.registerApiTeacher(formData).subscribe();
        console.log('agregado Maestro')
      }
    }
  }
  
}
