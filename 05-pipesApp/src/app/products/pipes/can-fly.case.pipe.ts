import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'canfly',
})

export class CanFlyPipe implements PipeTransform {
  transform(value: boolean):'vuela'|'no vuelva' {
    return value ? 'vuela':'no vuelva'


  }
}
