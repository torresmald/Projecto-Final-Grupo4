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
  public alertSuccess: boolean = false;
  public alertError: boolean = false;
  
  constructor(
    private msgBuilder: FormBuilder,
    private studentService: ApiStudentsService,
    private notificationService: NotificationsService,
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


    if (this.msgForm?.valid){

      this.notificationService.postNotification(form).subscribe()
      this.alertSuccess = true;
      this.msgForm?.reset();
      setTimeout(() => {
        this.alertSuccess = false;
      }, 4000);
    }else {
     this.alertError = true

     setTimeout(() => {
      this.alertError = false;
    }, 4000);
    }


  }
  public uploadImage(event: any) {
    const reader1 = new FileReader();
    if (event.target.files && event.target.files.length) {
      const file1 = event.target.files[0];
      console.log(file1);
      reader1.readAsArrayBuffer(file1);
      this.image = file1;
    }
  }
  public uploadCalendar(event: any) {
    const reader1 = new FileReader();
    if (event.target.files && event.target.files.length) {
      const file1 = event.target.files[0];
      console.log(file1);
      reader1.readAsArrayBuffer(file1);
      this.calendar = file1;
    }
  }
}

/* Este código es un componente  llamado "MessagesTeachersComponent". Incluye la importación de varios módulos y servicios, como FormBuilder, FormControl, Validators y Router. Además, utiliza un servicio ApiStudentsService para obtener una lista de estudiantes desde el servidor.

El componente también incluye un formulario en el que los profesores pueden enviar notificaciones a sus alumnos. El formulario tiene campos para el nombre, fecha y descripción de la notificación. También permite cargar imágenes y calendarios relacionados con la notificación.

La función newNotifications() se invoca cuando se envía el formulario; crea una instancia del objeto FormData que encapsula los datos enviados al servidor a través del servicio NotificationsService.

La función uploadImage () especifica cómo procesar las imágenes cargadas por los usuarios mediante FileReader(). Finalmente, este componente redirige al usuario a otra vista después del envío exitoso del mensaje. */
