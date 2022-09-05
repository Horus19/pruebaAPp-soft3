import { Role } from "./Role.model";

export interface Usuario {
    id:       number;
    username: string;
    nombre:   string;
    email:    string;
    roles:    Role[];
}