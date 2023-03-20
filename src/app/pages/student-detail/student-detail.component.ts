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
          {
            styles: {
              halign: 'center',
            },
          },
        ],
      ],
      theme: 'plain',
      styles: {
        fillColor: 'black',
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
    return doc.save('estudiante');
  }
}
