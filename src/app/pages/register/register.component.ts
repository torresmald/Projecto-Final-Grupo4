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
  public areas: string[] = [];

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
        name: ['', Validators.required],
        image: ['', Validators.required],
        phone: ['', Validators.required],
        address: ['', Validators.required],
        date: ['', Validators.required],
        areas: this.formBuilder.array([], Validators.required),
        diseases: ['', Validators.required],
        nutrition: ['', Validators.required],
        grade: ['', Validators.required],
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

  onCheckboxChange(event: Event) {
    if ((event.target as HTMLInputElement).checked) {
      this.areas.push((event.target as HTMLInputElement).value);
    } else {
      const index = this.areas.indexOf((event.target as HTMLInputElement).value);
      if (index >= 0) {
        this.areas.splice(index, 1);
      }
    }
   
    const areasFormArray = this.formType?.get('areas') as FormArray;
    areasFormArray.clear();
    this.areas.forEach(area => areasFormArray.push(new FormControl(area)));
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
    console.log(this.formType);
    if (this.formType?.valid) {
      const formData = this.formType.value;
      if (this.typeUser === 'student') {
        formData.areas = this.areas;
        // this.serviceStudent.postNewStudent(formData).subscribe();
        console.log(formData)
        alert('El estudiante ha sido registrado correctamente')
      } else if (this.typeUser === 'parent') {
        this.serviceParent.registerApiParent(formData).subscribe();
        alert('El padre ha sido registrado correctamente')
      } else if (this.typeUser === 'teacher') {
        this.serviceTeacher.registerApiTeacher(formData).subscribe();
        alert('El profesor ha sido registrado correctamente')
      }
    }else{
      alert('El formulario esta incompleto o es invalido')
    }
  }
  
}
