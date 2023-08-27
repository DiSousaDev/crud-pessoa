import { Component, Input } from '@angular/core';
import { Estado } from "../../shared";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'modal-estado',
  templateUrl: './modal-estado.component.html',
  styleUrls: ['./modal-estado.component.css']
})
export class ModalEstadoComponent {
  @Input() estado!: Estado;

  constructor(public activeModal: NgbActiveModal) {

  }

  ngOnInit(): void {

  }
}
