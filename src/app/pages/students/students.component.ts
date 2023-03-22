import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Students } from 'src/app/core/models/Students/transformed/students.model';
import { StudentsService } from 'src/app/core/services/students/students.service';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
const TOKEN_KEY = 'user-token-key';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

    public students: Students[] = [];
    public grade?: string[];
    public token?: string[];
    public img = new Image();
    public studentImg: any = new Image();
    public studentName: string = '';
    public sortByName?: 'asc' | 'desc';
    constructor(private studentsService: StudentsService, private router: Router) {
      const authToken = localStorage.getItem(TOKEN_KEY);
      authToken ? (this.token = JSON.parse(authToken).user.grade) : null;
      this.studentsService
        .getStudents()
        .subscribe((value) => this.students = value.filter((grade) => grade.grade === this.token
        ))
    }
    public goDetail(id: string){
      this.router.navigate(['/studentDetail', id])
    }
    public goBack(): void{
      this.router.navigate(['teacherView']);
    }

    public generatePDF(student?: Students[]) {
      this.img.src = '../../../assets/logos/LogoGeneral.png';
      const doc = new jsPDF();
      for (let index = 0; index < this.students.length - 1; index++) {
        let student = this.students[index];
        this.studentImg.src = student.image;        
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
             Direccion: ${student.address}
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
        doc.addImage(this.studentImg,'jpg',150,35,40,30);
        doc.addImage(this.studentImg,'jpg',150,100,40,30);
        doc.addImage(this.studentImg,'jpg',150,165,40,30);
        doc.addImage(this.studentImg,'jpg',150,230,40,30);
      } 
      return doc.save('prueba');
    }
  }
  

 
  

