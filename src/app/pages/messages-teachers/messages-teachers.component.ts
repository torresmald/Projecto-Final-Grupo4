import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/core/services/students/students.service';
import { ApiStudents } from './../../core/models/Students/api/api-students.model';
import { NotificationsService } from './../../core/services/notifications/notifications.service';
import { ApiStudentsService } from './../../core/services/students/api/api-students.service';

@Component({
  selector: 'app-messages-teachers',
  templateUrl: './messages-teachers.component.html',
  styleUrls: ['./messages-teachers.component.scss'],
})
export class MessagesTeachersComponent implements OnInit {
  public msgForm?: FormGroup;
  public students: ApiStudents[] = [];
  public calendar: Blob | string = '';

  constructor(
    private msgBuilder: FormBuilder,
    private studentService: ApiStudentsService,
    private notificationService: NotificationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studentService.getAllStudens().subscribe((value) => {
      this.students = value;
    });

    this.msgForm = this.msgBuilder.group({
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      description: new FormControl(''),
      calendar: new FormControl(null),
      student: new FormControl(this.students),
    });
  }

  public newNotifications() {
    const form = new FormData();
    form.append('name', this.msgForm?.get('name')?.value);
    form.append('date', this.msgForm?.get('date')?.value);
    form.append('description', this.msgForm?.get('description')?.value);
    form.append('student', this.msgForm?.get('student')?.value);
    form.append('calendar', this.calendar);

    this.notificationService.postNotification(form).subscribe(() => {
      alert('Enviado con exito');
      this.msgForm?.reset();
      this.router.navigate(['teacherView']);
    });
  }
  public uploadImage(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      reader.readAsArrayBuffer(file);
      this.calendar = file;
    }
  }
}
