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
        .subscribe((value) => this.students = value.filter((student) => student.grade === this.token && student.name !== 'Todos'
        ))
    }
    public goDetail(id: string){
      this.router.navigate(['/studentDetail', id])
    }
    public goBack(): void{
      this.router.navigate(['teacherView']);
    }

    public generatePDF(students: Students[]) {
      const doc = new jsPDF();
      const logoImg = '../../../assets/logos/LogoGeneral.png';
    
      for (let i = 0; i < students.length; i++) {
        const student = students[i];
    
        // Cargar la imagen del estudiante
        const studentImg = new Image();
        studentImg.onload = () => {
          // Agregar el encabezado con el logo y el nombre del estudiante
          doc.addImage(logoImg, 'PNG', 10, 10, 40, 40);
          doc.setFontSize(18);
          doc.text(`COLEGIO SEMILLA`, 60, 25);
          doc.text(student.name, 160, 25);
    
          // Agregar la información del estudiante
          const tableData = [
            ['Dirección', student.address],
            ['Teléfono', student.phone],
            ['Año de nacimiento', student.date],
            ['Clase', student.grade],
            ['Alergias', student.diseases],
            ['Medicamentos', student.nutrition],
            ['Áreas', student.areas]
          ];
          autoTable(doc,{
            startY: 100,
            head: [['', '']],
            body: tableData,
            theme: 'grid',
            styles: {
              cellPadding: 4,
              fontSize: 12
            },
            headStyles: {
              fillColor: [255, 87, 87],
              textColor: 'white'
            }
          });
    
          // Agregar la imagen del estudiante
          doc.addImage(studentImg, 'JPEG', 80, 50, 50, 50);
    
          // Guardar el documento PDF
          if (i === students.length - 1) {
            doc.save('prueba.pdf');
          } else {
            doc.addPage();
          }
        };
        studentImg.src = student.image;
      }
    }
    
  }
  

 
  

