import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any, orderBy: string, ascending: boolean = true) {
    if (!orderBy || orderBy.trim() === '') {
      return array;
    }

    if (ascending) {
      return Array.from(array).sort((a: any, b: any) => a[orderBy] - b[orderBy]);
    } else {
      return Array.from(array).sort((a: any, b: any) => b[orderBy] - a[orderBy]);
    }
  }

}
