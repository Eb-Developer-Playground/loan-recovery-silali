import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency',
  standalone: true,
})
export class FormatCurrencyPipe implements PipeTransform {
  transform(value: string | number, ...args: any[]): any {
    const formatter = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'KES',
    });
    return formatter.format(Number(value));
  }
}
