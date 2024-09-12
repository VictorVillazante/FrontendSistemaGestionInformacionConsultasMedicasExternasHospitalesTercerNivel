export class Procedimiento {
    idProcedimientoAtencion: number = 0;
    nombreProcedimiento: string = "";
    requisitos: any[] = [];
    pasos: any[] = [];
    idEspecialidad: number = 0;
    descripcionProcedimiento: string = "";
    idTipoProcedimiento: number = 0;
    createdAt: Date | null = null;
    updatedAt: Date | null = null;
    deletedAt: Date | null = null;

    jsonToProcedimiento(json: any): Procedimiento {
        let procedimiento = new Procedimiento();
        procedimiento.idProcedimientoAtencion = json.id_procedimiento_atencion ?? 0;
        procedimiento.nombreProcedimiento = json.nombre_procedimiento ?? "";
        procedimiento.requisitos = json.requisitos ?? [];
        procedimiento.pasos = json.pasos ?? [];
        procedimiento.idEspecialidad = json.id_especialidad ?? 0;
        procedimiento.descripcionProcedimiento = json.descripcion_procedimiento ?? "";
        procedimiento.idTipoProcedimiento = json.id_tipo_procedimiento ?? 0;
        procedimiento.createdAt = json.created_at ? new Date(json.created_at) : null;
        procedimiento.updatedAt = json.updated_at ? new Date(json.updated_at) : null;
        procedimiento.deletedAt = json.deleted_at ? new Date(json.deleted_at) : null;
        return procedimiento;
    }
}