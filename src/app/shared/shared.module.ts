import { NgModule } from '@angular/core';
import { NumericoDirective, ValidaIdadeMininaDirective } from "./directives";
import { UppercasePipe } from "./pipes";



@NgModule({
  declarations: [
    NumericoDirective,
    ValidaIdadeMininaDirective,
    UppercasePipe
  ],
  exports: [
    NumericoDirective,
    ValidaIdadeMininaDirective,
    UppercasePipe
  ]
})
export class SharedModule { }
