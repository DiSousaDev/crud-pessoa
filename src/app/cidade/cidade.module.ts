import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadeService } from "./services/cidade.service";
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { ModalCidadeComponent } from './modal-cidade/modal-cidade.component';
import { ModalEstadoComponent } from '../estado/modal-estado/modal-estado.component';
import { NgxMaskPipe } from "ngx-mask";
import { NgSelectModule } from "@ng-select/ng-select";


@NgModule({
  declarations: [
    ListarCidadeComponent,
    InserirCidadeComponent,
    EditarCidadeComponent,
    ModalCidadeComponent,
    ModalEstadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskPipe,
    NgSelectModule
  ],
  providers: [
    CidadeService
  ]
})
export class CidadeModule {
}
