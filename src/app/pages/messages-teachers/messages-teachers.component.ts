import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/core/services/students/students.service';
import { ApiStudents } from './../../core/models/Students/api/api-students.model';
import { NotificationsService } from './../../core/services/notifications/notifications.service';
import { ApiStudentsService } from './../../core/services/students/api/api-students.service';

@Component({
  selector: 'app-messages-teachers',
  templateUrl: './messages-teachers.component.html',
  styleUrls: ['./messages-teachers.component.scss']
})
export class MessagesTeachersComponent implements OnInit {

  public msgForm?: FormGroup
  public students: ApiStudents[] = [];

  constructor (private msgBuilder: FormBuilder, private studentService: ApiStudentsService, private notificationService: NotificationsService) {}


  ngOnInit(): void {
    this.studentService.getAllStudens().subscribe((value) => { this.students = value })

    this.msgForm = this.msgBuilder.group({
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      description: new FormControl(''),
      student: new FormControl(this.students)
      
    })
   
  }

  public newNotifications() {


    this.notificationService.postNotification(this.msgForm?.value).subscribe(() => {
      
    })

   
    
  }

}
