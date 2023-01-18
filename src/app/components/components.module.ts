import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    NavbarComponent,
    FormularioComponent

  ],
  imports: [
    CommonModule,
    MenubarModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule

  ],
  exports:[
    NavbarComponent,
    FormularioComponent

  ]
})
export class ComponentsModule { }
