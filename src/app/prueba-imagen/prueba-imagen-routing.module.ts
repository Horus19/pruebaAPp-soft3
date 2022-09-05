import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaImagenComponent } from './prueba-imagen.component';

const routes: Routes = [{ path: '', component: PruebaImagenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebaImagenRoutingModule { }
