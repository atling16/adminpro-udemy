import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { viewParentEl } from '@angular/core/src/view/util';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

@ViewChild('#txtporcentaje') txtporcentaje: ElementRef;


  // tslint:disable-next-line:no-input-rename
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input()  porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda', this.leyenda);
    console.log('Leyenda', this.porcentaje);
  }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda);
    // console.log('Leyenda', this.porcentaje);

  }

  onChanges(newValue: number) {

    // const elemHTML = document.getElementsByName('porcentaje')[0];
    // console.log(elemHTML);

    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if (newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }
    // value = this.porcentaje;

    // this.txtporcentaje.nativeElement.value = this.porcentaje;

    this.cambioValor.emit(this.porcentaje);

  }



  cambiarValor(valor: number) {
    if (this.porcentaje >= 100 && valor > 0 ) {
      this.porcentaje = 100;
      return;
     }

    if (this.porcentaje <= 0 && valor < 0 ) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit( this.porcentaje);

    
  }

}
