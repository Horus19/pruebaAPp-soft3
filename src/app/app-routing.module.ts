import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'prueba', 
    loadChildren: () => import('./prueba/prueba.module').then(m => m.PruebaModule) 
  },
  { path: 'pruebaImagen', loadChildren: () => import('./prueba-imagen/prueba-imagen.module').then(m => m.PruebaImagenModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
