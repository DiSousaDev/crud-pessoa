import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from "uuid";
import { Endereco } from "../../shared/models/endereco.model";


const LS_CHAVE: string = "pessoas";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor() { }

  listarTodos(): Endereco[] {
    const enderecos = localStorage[LS_CHAVE];
    return enderecos ? JSON.parse(enderecos) : [];
  }

  inserir(endereco: Endereco): void {
    const enderecos = this.listarTodos();
    endereco.id = uuidv4();
    enderecos.push(endereco);
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }

  buscarPorId(id: string): Endereco | undefined {
    const enderecos = this.listarTodos();
    return enderecos.find(endereco => endereco.id === id);
  }

  atualizar(endereco: Endereco): void {
    const enderecos = this.listarTodos();

    enderecos.forEach((obj, index, objs) => {
      if(endereco.id === obj.id) {
        objs[index] = endereco;
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }

  remover(id: string): void {
    let enderecos = this.listarTodos();
    enderecos = enderecos.filter(endereco => endereco.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }

}
