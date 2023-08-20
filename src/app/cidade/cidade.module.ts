import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadeService } from "./services/cidade.service";
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';


@NgModule({
  declarations: [
    ListarCidadeComponent,
    InserirCidadeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    CidadeService
  ]
})
export class CidadeModule {
}
