import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cadastro de pessoas';
  titleEndereco = 'Cadastro de Endereços'
  titleCidade = 'Cadastro de Cidades'
  titleEstado = 'Cadastro de Estados'
}
