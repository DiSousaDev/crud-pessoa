import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Endereco } from "../../shared/models/endereco.model";
import { EnderecoService } from "../services/endereco.service";

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.css']
})
export class EditarEnderecoComponent implements OnInit {
  @ViewChild('formEndereco') formEndereco!: NgForm;
  endereco!: Endereco;

  constructor(
    private enderecoService: EnderecoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    let id = this.route.snapshot.params['id'];
    // Com o id, obtém a pessoa
    const res = this.enderecoService.buscarPorId(id);
    if (res !== undefined)
      this.endereco = res;
    else
      throw new Error("Endereço não encontrado: id = " + id);
  }

  atualizar(): void {
    // Verifica se o formulário é válido
    if (this.formEndereco.form.valid) {
      // Efetivamente atualiza a pessoa
      this.enderecoService.atualizar(this.endereco);
      // Redireciona para /pessoas/listar
      this.router.navigate(['/enderecos/listar']);
    }
  }

  protected readonly alert = alert;
}
