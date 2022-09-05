import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { GuardsCheckStart } from '@angular/router';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  formPublicacion = this.fb.group({
    titulo: [''],
    descripcion: [''],
    imagen: [''],
    precio: [''],
    municipio: [''],
  });

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.formPublicacion.value);
  }

  toBlod64(event : any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
    };
  }


}
