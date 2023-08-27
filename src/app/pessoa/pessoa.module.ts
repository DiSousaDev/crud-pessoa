import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaService } from "./services/pessoa.service";
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { IConfig, provideEnvironmentNgxMask } from "ngx-mask";
import { SharedModule } from "../shared";
import { ModalPessoaComponent } from './modal-pessoa/modal-pessoa.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ListarPessoaComponent,
    InserirPessoaComponent,
    EditarPessoaComponent,
    ModalPessoaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    PessoaService,
    provideEnvironmentNgxMask(options)
  ]
})
export class PessoaModule {
}
