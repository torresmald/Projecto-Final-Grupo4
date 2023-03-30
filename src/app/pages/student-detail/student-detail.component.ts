import { Parents } from './../../core/models/Parents/transformed/parents.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Students } from 'src/app/core/models/Students/transformed/students.model';
import { StudentsService } from 'src/app/core/services/students/students.service';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
const TOKEN_KEY = 'user-token-key';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss'],
})
export class StudentDetailComponent {
  public student?: Students;
  public students: Students[] = [];
  public grade?: string[];
  public token?: string[];
  public tutors?: Parents[];
  public img = new Image();
  public studentImg: any = new Image();
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentsService,
    private route: Router
  ) {
    const authToken = localStorage.getItem(TOKEN_KEY);
    authToken ? (this.token = JSON.parse(authToken).user.grade) : null;
    this.studentService
      .getStudents()
      .subscribe(
        (value) =>
          (this.students = value.filter((grade) => grade.grade === this.token))
      );
    this.activatedRoute.params.subscribe((params) => {
      const studentId = params['id'];
      this.studentService
        .getStudentDetail(studentId)
        .subscribe((student) => (this.student = student));
    });
  }
  public goBack(): void {
    this.route.navigate(['students']);
  }
  public generatePDF(student?: Students) {
    this.img.src = '../../../assets/logos/LogoGeneral.png';
    this.studentImg.src = this.student?.image;
    const doc = new jsPDF();
    autoTable(doc, {
      body: [
        [
          {
            content: 'COLEGIO SEMILLA',
            styles: {
              halign: 'left',
              fontSize: 18,
              textColor: 'white',
            },
          },
          {
            content: `${student?.name}`,
            styles: {
              halign: 'right',
              fontSize: 18,
              textColor: 'white',
            },
          },
        ],
      ],
      theme: 'plain',
      styles: {
        fillColor: `rgb(255, 87, 87)`,
      },
    });
    autoTable(doc, {
      body: [
        [
          {
            content: `
         Direccion: ${student?.address}
         Telefono:${student?.phone} 
         Año de nacimiento: ${student?.date}
         Clase: ${student?.grade}
         Alergias: ${student?.diseases}
         Medicamentos: ${student?.nutrition}    
         Areas:  ${student?.areas}
        `,
            styles: {
              halign: 'left',
            },
          },
        ],
      ],
      theme: 'grid',
    });
    doc.addImage(this.img, 'png',100,5,40,30);
    doc.addImage(this.studentImg,'jpg',150,30,40,30);
    return doc.save(this.student?.name);
  }
}

/* Este es un componente llamado "StudentComponent" que utiliza varios servicios y modelos. Algunas de sus funcionalidades incluyen la obtención de detalles del estudiante a través del ID proporcionado en los parámetros, filtrar estudiantes por su grado, generar y descargar un archivo PDF con información detallada sobre el estudiante actualmente seleccionado. También contiene una función para volver atrás a la página anterior. */