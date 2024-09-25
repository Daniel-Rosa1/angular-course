import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status : boolean): string {
    const INVALID_STAUS =  status === undefined || status === null;

    if(INVALID_STAUS){
      return 'Status indiponível ou inválido';
    }

    return status ? 'Ativo' : 'Inativo';
  }

}
