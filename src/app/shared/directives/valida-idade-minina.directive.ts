import { Directive, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
  selector: '[validaIdadeMinina]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidaIdadeMininaDirective,
      multi: true
    }
  ]
})
export class ValidaIdadeMininaDirective implements Validator, OnInit {

  @Input("valorMinimo") valorMinimo: string = "0";

  constructor() { }

  ngOnInit(): void {
  }

  validate(c: FormControl) {
    let idade: number = +c.value;
    if (isNaN(idade)) {
      return { 'minimo': true, 'requiredValue': +this.valorMinimo }
    }
    if (idade < 18) {
      return { 'minimo': true, 'requiredValue': +this.valorMinimo }
    }
    return null;
  }
}
