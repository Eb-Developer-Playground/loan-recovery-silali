import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snakeToSpace',
  standalone: true,
})
export class SnakeToSpacePipe implements PipeTransform {
  transform(value: string): unknown {
    return value.replace('_', ' ');
  }
}
