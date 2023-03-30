import { Pipe, PipeTransform } from '@angular/core';
import { Students } from 'src/app/core/models/Students/transformed/students.model';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(value: Students[] | null, name: string = ''): Students[] {
    if (!value) { return []; }
    if (!name) { return value; }
    return value.filter((student) => {
      return student.name.toLowerCase().includes(name)
    })
  }

}

/* Este código define un pipe llamado 'filterName' , que se utiliza para filtrar un array de estudiantes (Students[]) según el nombre proporcionado. Si el valor es nulo, retorna un array vacío. Si no se proporciona un nombre, retorna el array original sin cambios. Si se proporciona un nombre, filtra el array de estudiantes, devolviendo solo aquellos cuyos nombres contengan la cadena de texto ingresada (sin importar mayúsculas o minúsculas).  */