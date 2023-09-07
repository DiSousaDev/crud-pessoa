export class Endereco {
  constructor(
    public id?: string,
    public rua?: string,
    public numero?: string,
    public complemento?: string,
    public bairro?: string,
    public cep?: string,
    public cidade?: string,
    public estado?: string,
    public residencial?: boolean
  ) {
  }
}
