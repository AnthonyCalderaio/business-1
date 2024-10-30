import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 100): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }

}
