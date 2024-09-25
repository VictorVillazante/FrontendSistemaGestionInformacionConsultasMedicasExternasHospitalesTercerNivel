

export class Rol {
    idRol: number = 0;
    nombre: string = "";

    jsonToRol(json: any): Rol {
        let rol = new Rol();
        rol.idRol = json.idRol ?? 0;
        rol.nombre = json.nombre ?? "";
        return rol;
    }
}