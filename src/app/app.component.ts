import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titlePessoa = 'Pessoas';
  titleEndereco = 'Endereços'
  titleCidade = 'Cidades'
  titleEstado = 'Estados'
  titleCadastros = 'Cadastros'
}
