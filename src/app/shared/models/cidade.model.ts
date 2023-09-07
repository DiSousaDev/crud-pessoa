import { Estado } from "./estado.model";

export class Cidade {
  constructor(
    public id?: string,
    public nome?: string,
    public estado?: Estado
  ) {
  }
}
