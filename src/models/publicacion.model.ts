import { Municipio } from "./municipio.model";
import { Usuario } from "./usuario.model";

export interface Publicacion {
    id:          number;
    titulo:      string;
    descripcion: string;
    precio:      number;
    imagen:      string;
    usuario:     Usuario;
    municipio:   Municipio;
}