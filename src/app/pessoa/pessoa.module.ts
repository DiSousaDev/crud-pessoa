import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaService } from "./services/pessoa.service";
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { NumericoDirective } from "../shared/directives/numerico.directive";
import { ValidaIdadeMininaDirective } from "../shared/directives/valida-idade-minina.directive";
import { IConfig, NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from "ngx-mask";
import { UppercasePipe } from "../shared/pipes/uppercase.pipe";

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ListarPessoaComponent,
    InserirPessoaComponent,
    EditarPessoaComponent,
    NumericoDirective,
    ValidaIdadeMininaDirective,
    UppercasePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    PessoaService,
    provideEnvironmentNgxMask(options)
  ]
})
export class PessoaModule {
}
