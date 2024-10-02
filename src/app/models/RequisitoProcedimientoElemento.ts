import { Imagen } from "./Imagen";

export class RequisitoProcedimientoElemento{
    idRequisito:number=0;
    tituloRequisito:string="";
    idProcedimiento: number = 0;
    nombreProcedimiento: string = "";
    idElemento:number=0;
    tipoElemento:string="";
    createdAt: Date | null = null;
    updatedAt: Date | null = null;
    deletedAt: Date | null = null;
    imagenes: Imagen[] = [];


    jsonToRequisitoProcedimientoElemento(json: any): RequisitoProcedimientoElemento {
        let requisitoProcedimientoElemento = new RequisitoProcedimientoElemento();
        requisitoProcedimientoElemento.idRequisito = json.idRequisito ?? 0;
        requisitoProcedimientoElemento.tituloRequisito = json.tituloRequisito?? "";
        requisitoProcedimientoElemento.idProcedimiento = json.idProcedimiento ?? 0;
        requisitoProcedimientoElemento.nombreProcedimiento = json.nombreProcedimiento ?? "";
        requisitoProcedimientoElemento.imagenes = json.imagenes ? json.imagenes.map((imagen: any) => new Imagen().jsonToImagen(imagen)): [];
        requisitoProcedimientoElemento.idElemento = json.idElemento ?? 0;
        requisitoProcedimientoElemento.tipoElemento = json.tipoElemento ?? 0;
        requisitoProcedimientoElemento.createdAt = json.createdAt ? new Date(json.createdAt) : null;
        requisitoProcedimientoElemento.updatedAt = json.updatedAt ? new Date(json.updatedAt) : null;
        requisitoProcedimientoElemento.deletedAt = json.deletedAt ? new Date(json.deletedAt) : null;
        return requisitoProcedimientoElemento;
    }
}