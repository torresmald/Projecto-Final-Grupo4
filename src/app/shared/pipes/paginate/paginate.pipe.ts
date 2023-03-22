import { Pipe, PipeTransform } from '@angular/core';
import { Notifications } from './../../../core/models/Notifications/notifications.model';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(array: Notifications[], page_size: number , page_number: number): Notifications[] {

    if (!array.length) return []

    page_size = page_size || 5

    page_number = page_number || 1

    --page_number

    return array.slice(page_number * page_size, (page_number + 1) * page_size)
    
  
  }

}
