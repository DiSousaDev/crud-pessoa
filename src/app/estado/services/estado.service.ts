import { Injectable } from '@angular/core';
import { Estado } from "../../shared/models/estado.model";
import { v4 as uuidv4 } from "uuid";

const LS_CHAVE: string = "estados";

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor() {
  }

  listarTodos(): Estado[] {
    const estados = localStorage[LS_CHAVE];
    return estados ? JSON.parse(estados) : [];
  }

  inserir(estado: Estado): void {
    const estados = this.listarTodos();
    estado.id = uuidv4();
    estados.push(estado);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  buscarPorId(id: string): Estado | undefined {
    const estados = this.listarTodos();
    return estados.find(estado => estado.id === id);
  }

  atualizar(estado: Estado): void {
    const estados = this.listarTodos();

    estados.forEach((obj, index, objs) => {
      if (estado.id === obj.id) {
        objs[index] = estado;
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  remover(id: string): void {
    let estados = this.listarTodos();
    estados = estados.filter(estado => estado.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

}
