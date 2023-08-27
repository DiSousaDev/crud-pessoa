import { NgModule } from '@angular/core';
import { NumericoDirective, ValidaIdadeMininaDirective } from "./directives";
import { UppercasePipe } from "./pipes";
import { NgxMaskDirective, NgxMaskPipe } from "ngx-mask";



@NgModule({
  declarations: [
    NumericoDirective,
    ValidaIdadeMininaDirective,
    UppercasePipe
  ],
  imports: [
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [
    NumericoDirective,
    ValidaIdadeMininaDirective,
    NgxMaskDirective,
    NgxMaskPipe,
    UppercasePipe
  ]
})
export class SharedModule { }
