import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snakeToSpace',
  standalone: true,
})
export class SnakeToSpacePipe implements PipeTransform {
  transform(value?: string | null): unknown {
    if (value) {
      return value.replace('_', ' ');
    }

    return '';
  }
}
