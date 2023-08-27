import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PessoaModule } from "./pessoa/pessoa.module";
import { EnderecoModule } from "./endereco/endereco.module";
import { CidadeModule } from "./cidade/cidade.module";
import { EstadoModule } from "./estado/estado.module";
import { SharedModule } from "./shared";
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PessoaModule,
    EnderecoModule,
    CidadeModule,
    EstadoModule,
    SharedModule,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownItem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
