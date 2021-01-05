import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoAssunto'
})
export class TipoAssuntoPipe implements PipeTransform {

  transform(value:any = [], tipo: number = 1) {

    return tipo && tipo > 0 ? value.filter(e => e.tipo == tipo) : value;

  }

}
