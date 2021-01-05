import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAssuntos'
})
export class AssuntosPipe implements PipeTransform {

  transform(value:any = [], params:any = []) {

    if(value.length == 0) return [];
    else
      return value.filter((e:any) => params.indexOf(e.titulo) != -1 ? false : true);
  }

}
