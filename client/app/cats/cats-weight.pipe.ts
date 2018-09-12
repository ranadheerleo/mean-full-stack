import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catWeight'
})
export class CatsWeightPipe implements PipeTransform {
  transform(catWeight: number): number {

    return   Math.round((catWeight * 100) / 100) ;


  }
}
