import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicacion } from 'src/models/publicacion.model';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(
    private http: HttpClient
  ) {}

  getPublicacion(idPublicacion: number) {
    return this.http.get<Publicacion>(`http://localhost:8080/api/publicacionByID?id=${idPublicacion}`);
  }

}
