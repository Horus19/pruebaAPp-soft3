import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Publicacion } from 'src/models/publicacion.model';
import { ImagenService } from './imagen.service';

@Component({
  selector: 'app-prueba-imagen',
  templateUrl: './prueba-imagen.component.html',
  styleUrls: ['./prueba-imagen.component.scss']
})
export class PruebaImagenComponent implements OnInit {

  publicacion! : Publicacion ;
  imageSource: any;

  constructor(
    private imagenService : ImagenService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.imagenService.getPublicacion(1).subscribe(
      (data) => {
        this.publicacion = data;
        this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.publicacion.imagen}`);
      }
    )
  }

}
