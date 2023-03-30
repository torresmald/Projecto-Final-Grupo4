import { Pipe, PipeTransform } from '@angular/core';
import { Students } from 'src/app/core/models/Students/transformed/students.model';

@Pipe({
  name: 'sortName'
})
export class SortNamePipe implements PipeTransform {

  transform(value: Students[] | null, condition?: 'asc' | 'desc'): Students[] {
    if (!value) { return []; }
    if (!condition) { return value; }
    if (condition === "asc"){
      return value.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    } else{
      return value.sort((a, b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0))
    }
  }

}
/* Este código define un pipe llamado 'sortName', que implementa la interfaz PipeTransform. El pipe toma una lista de estudiantes y un parámetro opcional 'condition' con valores 'asc' o 'desc'. Si la lista de estudiantes es nula, devuelve una lista vacía. Si 'condition' no se proporciona, devuelve la lista sin cambios. Si 'condition' es 'asc', ordena la lista de estudiantes en orden alfabético ascendente por nombre. Si es 'desc', ordena la lista en orden alfabético descendente por nombre. */