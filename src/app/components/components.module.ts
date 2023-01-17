import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import {DropdownModule} from 'primeng/dropdown';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FormularioComponent

  ],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,

  ],
  exports:[
    NavbarComponent,
    FormularioComponent

  ]
})
export class ComponentsModule { }
