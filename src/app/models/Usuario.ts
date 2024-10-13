import { Imagen } from "./Imagen";

export class Usuario {
    idUsuario: number = 0;
    nombres: string = "";
    ci: string = "";
    direccion: string = "";
    celular: string = "";
    email: string = "";
    grupoSanguineo: string = "";
    apellidoPaterno: string = "";
    apellidoMaterno: string = "";
    fechaNacimiento: string = "";
    sexo: string = "";
    estadoCivil: string = "";
    edad: number = 0;
    diasSancionPeticionFichaPresencial: number = 0;
    telefono: string = "";
    createdAt: Date | null = null;
    updatedAt: Date | null = null;
    deletedAt: Date | null = null;
    imagenes: Imagen[] =[];
    jsonToUsuario(json: any): Usuario {
        console.log(json);
        let usuario = new Usuario();
        usuario.idUsuario = json.idUsuario ?? 0;
        usuario.nombres = json.nombres ?? "";
        usuario.ci = json.ci ?? "";
        usuario.direccion = json.direccion ?? "";
        usuario.celular = json.celular ?? "";
        usuario.email = json.email ?? "";
        usuario.grupoSanguineo = json.grupoSanguineo ?? "";
        usuario.apellidoPaterno = json.apellidoPaterno ?? "";
        usuario.apellidoMaterno = json.apellidoMaterno ?? "";
        usuario.fechaNacimiento = json.fechaNacimiento ? json.fechaNacimiento : "";
        usuario.sexo = json.sexo ?? "";
        usuario.estadoCivil = json.estadoCivil ?? "";
        usuario.edad = json.edad ?? 0;
        usuario.diasSancionPeticionFichaPresencial = json.diasSancionPeticionFichaPresencial ?? 0;
        usuario.telefono = json.telefono ?? "";
        usuario.createdAt = json.createdAt ? new Date(json.createdAt) : null;
        usuario.updatedAt = json.updatedAt ? new Date(json.updatedAt) : null;
        usuario.deletedAt = json.deletedAt ? new Date(json.deletedAt) : null;
        usuario.imagenes = json.imagenes ? json.imagenes.map((imagen: any) => new Imagen().jsonToImagen(imagen)):[];
        return usuario;
    }
}