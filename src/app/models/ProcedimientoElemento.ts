import { Imagen } from "./Imagen";
import { Paso } from "./Paso";
import { Requisito } from "./Requisito";

export class ProcedimientoElemento {
    idProcedimiento: number = 0;
    nombreProcedimiento: string = "";
    idElemento:number=0;
    tipoElemento:string="";
    createdAt: Date | null = null;
    updatedAt: Date | null = null;
    deletedAt: Date | null = null;
    imagenes: Imagen[] = [];


    jsonToProcedimientoElemento(json: any): ProcedimientoElemento {
        let procedimiento = new ProcedimientoElemento();
        procedimiento.idProcedimiento = json.idProcedimiento ?? 0;
        procedimiento.nombreProcedimiento = json.nombreProcedimiento ?? "";
        procedimiento.imagenes = json.imagenes ? json.imagenes.map((imagen: any) => new Imagen().jsonToImagen(imagen)): [];
        procedimiento.idElemento = json.idElemento ?? 0;
        procedimiento.tipoElemento = json.tipoElemento ?? 0;
        procedimiento.createdAt = json.createdAt ? new Date(json.createdAt) : null;
        procedimiento.updatedAt = json.updatedAt ? new Date(json.updatedAt) : null;
        procedimiento.deletedAt = json.deletedAt ? new Date(json.deletedAt) : null;
        return procedimiento;
    }
}