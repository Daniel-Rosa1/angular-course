import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';
import { I } from '@angular/cdk/keycodes';

@Pipe({
  name: 'adress'
})
export class AdressPipe implements PipeTransform {

  transform(addres : IAddress): string {
    const INVALID_ADDRES =
      !addres ||
      !addres.rua ||
      !addres.estado ||
      !addres.cidade ||
      addres.numero === null ||
      addres.numero === undefined;

    if(INVALID_ADDRES){
      return `Endereço indisponível ou inválido`
    }

    return `${addres.rua}, ${addres.numero}, ${addres.cidade} - ${addres.estado}`;
  }
}
