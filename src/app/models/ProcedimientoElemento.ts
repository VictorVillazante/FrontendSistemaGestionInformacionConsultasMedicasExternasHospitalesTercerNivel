import { Imagen } from "./Imagen";
import { Paso } from "./Paso";
import { Requisito } from "./Requisito";

export class ProcedimientoElemento {
    idProcedimiento: number = 0;
    nombreProcedimiento: string = "";
    descripcionProcedimiento: string = "";
    createdAt: Date | null = null;
    updatedAt: Date | null = null;
    deletedAt: Date | null = null;
    pasos: Paso[]=[];
    requisitos: Requisito[] = [];
    imagenes: Imagen[] = [];


    jsonToProcedimientoElemento(json: any): ProcedimientoElemento {
        let procedimiento = new ProcedimientoElemento();
        procedimiento.idProcedimiento = json.idProcedimiento ?? 0;
        procedimiento.nombreProcedimiento = json.nombreProcedimiento ?? "";
        procedimiento.requisitos = json.requisitos ? json.requisitos.map((requisito: any) => new Requisito().jsonToRequisito(requisito)): [];
        procedimiento.pasos = json.pasos ? json.pasos.map((paso: any) => new Paso().jsonToPaso(paso)) : [];
        procedimiento.imagenes = json.imagenes ? json.imagenes.map((imagen: any) => new Imagen().jsonToImagen(imagen)): [];
        procedimiento.descripcionProcedimiento = json.descripcion ?? "";
        procedimiento.createdAt = json.createdAt ? new Date(json.createdAt) : null;
        procedimiento.updatedAt = json.updatedAt ? new Date(json.updatedAt) : null;
        procedimiento.deletedAt = json.deletedAt ? new Date(json.deletedAt) : null;
        return procedimiento;
    }
}