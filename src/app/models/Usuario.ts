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
    fechaNacimiento: Date | null = null;
    sexo: string = "";
    estadoCivil: string = "";
    edad: number = 0;
    diasSancionPeticionFichaPresencial: number = 0;
    telefono: string = "";
    createdAt: Date | null = null;
    updatedAt: Date | null = null;
    deletedAt: Date | null = null;

    jsonToUsuario(json: any): Usuario {
        let usuario = new Usuario();
        usuario.idUsuario = json.id_usuario ?? 0;
        usuario.nombres = json.nombres ?? "";
        usuario.ci = json.ci ?? "";
        usuario.direccion = json.direccion ?? "";
        usuario.celular = json.celular ?? "";
        usuario.email = json.email ?? "";
        usuario.grupoSanguineo = json.grupo_sanguineo ?? "";
        usuario.apellidoPaterno = json.apellido_paterno ?? "";
        usuario.apellidoMaterno = json.apellido_materno ?? "";
        usuario.fechaNacimiento = json.fecha_nacimiento ? new Date(json.fecha_nacimiento) : null;
        usuario.sexo = json.sexo ?? "";
        usuario.estadoCivil = json.estado_civil ?? "";
        usuario.edad = json.edad ?? 0;
        usuario.diasSancionPeticionFichaPresencial = json.dias_sancion_peticion_ficha_presencial ?? 0;
        usuario.telefono = json.telefono ?? "";
        usuario.createdAt = json.created_at ? new Date(json.created_at) : null;
        usuario.updatedAt = json.updated_at ? new Date(json.updated_at) : null;
        usuario.deletedAt = json.deleted_at ? new Date(json.deleted_at) : null;
        return usuario;
    }
}