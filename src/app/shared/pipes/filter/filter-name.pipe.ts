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
