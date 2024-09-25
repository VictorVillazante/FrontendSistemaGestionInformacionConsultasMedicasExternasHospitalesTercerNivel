import { Imagen } from "./Imagen";

export class RolUsuario {
    idRol: number = 0;
    nombreRol: string = "";
    idUsuario: number = 0;
    ciUsuario: string="";
    imagenesUsuario: Imagen[] =[];
    jsonToRolUsuario(json: any): RolUsuario {
        let rolUsuario = new RolUsuario();
        rolUsuario.idRol = json.idRol ?? 0;
        rolUsuario.nombreRol = json.nombreRol ?? "";
        rolUsuario.ciUsuario = json.ciUsuario ?? "";
        rolUsuario.imagenesUsuario = json.imagenesUsuario ? json.imagenesUsuario.map((img: any) => new Imagen().jsonToImagen(img)) : [];
        rolUsuario.idUsuario = json.idUsuario ?? 0;
        return rolUsuario;
    }
}