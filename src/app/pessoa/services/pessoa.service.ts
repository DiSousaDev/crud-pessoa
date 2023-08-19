import { Injectable } from '@angular/core';
import { Pessoa } from "../../shared/models/pessoa.model";
import { v4 as uuidv4 } from "uuid";


const LS_CHAVE: string = "pessoas";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  listarTodos(): Pessoa[] {
    const pessoas = localStorage[LS_CHAVE];
    return pessoas ? JSON.parse(pessoas) : [];
  }

  inserir(pessoa: Pessoa): void {
    const pessoas = this.listarTodos();
    pessoa.id = uuidv4();
    pessoas.push(pessoa);
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  buscarPorId(id: string): Pessoa | undefined {
    const pessoas = this.listarTodos();
    return pessoas.find(pessoa => pessoa.id === id);
  }

  atualizar(pessoa: Pessoa): void {
    const pessoas = this.listarTodos();

    pessoas.forEach((obj, index, objs) => {
      if(pessoa.id === obj.id) {
        objs[index] = pessoa;
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  remover(id: string): void {
    let pessoas = this.listarTodos();
    pessoas = pessoas.filter(pessoa => pessoa.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }


}
