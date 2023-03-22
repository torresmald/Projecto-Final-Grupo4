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
