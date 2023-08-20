import { Injectable } from '@angular/core';
import { Cidade } from "../../shared/models/cidade.model";
import { v4 as uuidv4 } from "uuid";

const LS_CHAVE: string = "cidades";

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor() {
  }

  listarTodos(): Cidade[] {
    const cidades = localStorage[LS_CHAVE];
    return cidades ? JSON.parse(cidades) : [];
  }

  inserir(cidade: Cidade): void {
    const cidades = this.listarTodos();
    cidade.id = uuidv4();
    cidades.push(cidade);
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  buscarPorId(id: string): Cidade | undefined {
    const cidades = this.listarTodos();
    return cidades.find(cidade => cidade.id === id);
  }

  atualizar(cidade: Cidade): void {
    const cidades = this.listarTodos();

    cidades.forEach((obj, index, objs) => {
      if (cidade.id === obj.id) {
        objs[index] = cidade;
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  remover(id: string): void {
    let cidades = this.listarTodos();
    cidades = cidades.filter(cidade => cidade.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

}
