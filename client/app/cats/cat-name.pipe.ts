import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'catName'
})
export class CatNamePipe implements PipeTransform {
  transform(catName: string): string {
    if (!catName) {
      return catName;
    }
    return catName.replace(/\w\S*/g, function (str) {
      return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    });
  }
}

