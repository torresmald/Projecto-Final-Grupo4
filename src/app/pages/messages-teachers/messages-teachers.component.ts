import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiStudents } from './../../core/models/Students/api/api-students.model';
import { NotificationsService } from './../../core/services/notifications/notifications.service';
import { ApiStudentsService } from './../../core/services/students/api/api-students.service';
const TOKEN_KEY = 'user-token-key';

@Component({
  selector: 'app-messages-teachers',
  templateUrl: './messages-teachers.component.html',
  styleUrls: ['./messages-teachers.component.scss'],
})
export class MessagesTeachersComponent implements OnInit {
  public msgForm?: FormGroup;
  public students: ApiStudents[] = [];
  public image: Blob | string = '';
  public calendar: Blob | string = '';
  public token?: string[];

  constructor(
    private msgBuilder: FormBuilder,
    private studentService: ApiStudentsService,
    private notificationService: NotificationsService,
    private router: Router
  ) {
    const authToken = localStorage.getItem(TOKEN_KEY);
    authToken ? (this.token = JSON.parse(authToken).user.grade) : null;
  }

  ngOnInit(): void {
    this.studentService
      .getAllStudens()
      .subscribe(
        (value) =>
          (this.students = value.filter((grade) => grade.grade === this.token))
      );

    this.msgForm = this.msgBuilder.group({
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      description: new FormControl(''),
      image: new FormControl(null),
      calendar: new FormControl(null),
      student: new FormControl(this.students),
    });
  }

  public newNotifications() {
    const form = new FormData();
    form.append('name', this.msgForm?.get('name')?.value);
    form.append('date', this.msgForm?.get('date')?.value);
    form.append('description', this.msgForm?.get('description')?.value);
    form.append('image', this.image);
    form.append('calendar', this.calendar);
    form.append('student', this.msgForm?.get('student')?.value);

    this.notificationService.postNotification(form).subscribe(() => {
      if(this.msgForm?.valid){
        alert('Enviado con exito');
        this.msgForm?.reset();
        this.router.navigate(['teacherView']);
      }
    });
  }
  public uploadImage(event: any) {
    const reader1 = new FileReader();
    const reader2 = new FileReader();

    if (event.target.files && event.target.files.length) {
      const file1 = event.target.files[0];
      const file2 = event.target.files[0];
      reader1.readAsArrayBuffer(file1);
      reader2.readAsArrayBuffer(file2);
      this.image = file1;
      this.calendar = file2;
    }
  }
}
