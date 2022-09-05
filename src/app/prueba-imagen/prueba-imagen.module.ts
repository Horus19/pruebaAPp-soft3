import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaImagenRoutingModule } from './prueba-imagen-routing.module';
import { PruebaImagenComponent } from './prueba-imagen.component';


@NgModule({
  declarations: [
    PruebaImagenComponent
  ],
  imports: [
    CommonModule,
    PruebaImagenRoutingModule
  ]
})
export class PruebaImagenModule { }
