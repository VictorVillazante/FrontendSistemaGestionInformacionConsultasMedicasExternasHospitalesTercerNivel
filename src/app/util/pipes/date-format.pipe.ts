import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  
  transform(value: Date | string | null, format: string = 'dd-MM-yyyy'): string {
    if (!value) return '';

    const date = new Date(value);
    const day: string = ('0' + date.getDate()).slice(-2);
    const month: string = ('0' + (date.getMonth() + 1)).slice(-2);
    const year: string = date.getFullYear().toString();

    switch (format) {
      case 'dd-MM-yyyy':
        return `${day}-${month}-${year}`;
      default:
        return `${day}-${month}-${year}`;
    }
  }

}
