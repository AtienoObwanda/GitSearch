import { LowerCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'api'
})
export class ApiPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return LowerCasePipe;
  }

}
