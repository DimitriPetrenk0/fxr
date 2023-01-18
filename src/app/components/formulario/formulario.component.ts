import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

interface Tipo_anticipo {
  name: string,
}



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent {

  tipo_anticipo: Tipo_anticipo[];

  items: SelectItem[];
  item: string;

  //texto plano
  cond_pago: string;
  monto: string;
  no_oc:string;

  constructor() {
    this.items = [];
    for (let i = 0; i < 5; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }

    this.tipo_anticipo = [
      { name: 'Tipo 1' },
      { name: 'Tipo 2' },
      { name: 'Tipo 3' },
    ];
    console.log(this.tipo_anticipo);
  }



}
