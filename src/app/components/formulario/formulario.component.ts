

import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Component,OnInit } from '@angular/core';




@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent implements OnInit {


  public formParent: FormGroup = new FormGroup({});



  ngOnInit(): void {

    this.initFormParent()

  }

  initFormParent(): void {
    this.formParent = new FormGroup(
      {
        tipo_anticipo: new FormControl(''),
        periodo_afect: new FormControl(''),
        fecha: new FormControl(''),
        no_prov: new FormControl(''),
        no_factura: new FormControl(''),
        fecha_factura: new FormControl(''),
        saldo: new FormControl(''),


        cond_pago: new FormControl(''),
        monto: new FormControl(''),
        no_oc: new FormControl(''),
        detalle: new FormArray([])
      }
    )

  }


  initFormDetalle(): FormGroup {
    return new FormGroup(
      {
        no_detalle: new FormControl(''),
        cantidad_detalle: new FormControl(''),
        precioUnit_detalle: new FormControl(''),
        monto_detalle: new FormControl('')
      }
    )
  }
  mostrar(): void{
    console.log(this.formParent.value )
  }


  addDetalle(): void {
    const nuevo_detalle = this.formParent.get('detalle') as FormArray;
    nuevo_detalle.push(this.initFormDetalle())
  }

  //TODO arreglar removeDetalle, eimina siempre el ultimo de la lista y no el seleccionado

  removeDetalle(): void {
    const detalle_a_remover = this.formParent.get('detalle') as FormArray;
    detalle_a_remover.removeAt(1)
  }

  getCtrl(key: string, form: FormGroup): any {
    return form.get(key)
  }



}
