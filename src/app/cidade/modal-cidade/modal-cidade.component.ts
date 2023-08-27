import { Component, Input } from '@angular/core';
import { Cidade } from "../../shared";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'modal-cidade',
  templateUrl: './modal-cidade.component.html',
  styleUrls: ['./modal-cidade.component.css']
})
export class ModalCidadeComponent {

  @Input() cidade!: Cidade;

  constructor(public activeModal: NgbActiveModal) {

  }

  ngOnInit(): void {

  }

}
