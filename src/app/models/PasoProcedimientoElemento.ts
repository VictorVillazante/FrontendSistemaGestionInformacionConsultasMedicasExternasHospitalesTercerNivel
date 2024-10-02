import { Imagen } from "./Imagen";

export class PasoProcedimientoElemento{
    idPaso:number=0;
    nombrePaso:string="";
    idProcedimiento: number = 0;
    nombreProcedimiento: string = "";
    idElemento:number=0;
    tipoElemento:string="";
    createdAt: Date | null = null;
    updatedAt: Date | null = null;
    deletedAt: Date | null = null;
    imagenes: Imagen[] = [];


    jsonToPasoProcedimientoElemento(json: any): PasoProcedimientoElemento {
        let pasoProcedimientoElemento = new PasoProcedimientoElemento();
        pasoProcedimientoElemento.idPaso = json.idPaso ?? 0;
        pasoProcedimientoElemento.nombrePaso = json.nombrePaso?? "";
        pasoProcedimientoElemento.idProcedimiento = json.idProcedimiento ?? 0;
        pasoProcedimientoElemento.nombreProcedimiento = json.nombreProcedimiento ?? "";
        pasoProcedimientoElemento.imagenes = json.imagenes ? json.imagenes.map((imagen: any) => new Imagen().jsonToImagen(imagen)): [];
        pasoProcedimientoElemento.idElemento = json.idElemento ?? 0;
        pasoProcedimientoElemento.tipoElemento = json.tipoElemento ?? 0;
        pasoProcedimientoElemento.createdAt = json.createdAt ? new Date(json.createdAt) : null;
        pasoProcedimientoElemento.updatedAt = json.updatedAt ? new Date(json.updatedAt) : null;
        pasoProcedimientoElemento.deletedAt = json.deletedAt ? new Date(json.deletedAt) : null;
        return pasoProcedimientoElemento;
    }
}