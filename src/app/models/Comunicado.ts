import { Imagen } from "./Imagen";

export class Comunicado{
    idComunicado:number=0;
    titulo:string="";
    introduccion:string="";
    lugar:string="";
    cuerpo:string="";
    citas:string="";
    datosContacto:string="";
    imagenes:Imagen[]=[];
    createdAt:Date|null=null;
    updatedAt:Date|null=null;
    deletedAt:Date|null=null;
    jsonToComunicado(json:any):Comunicado{
        let comunicado = new Comunicado();
        comunicado.idComunicado = json.idComunicado ?? 0;
        comunicado.titulo = json.titulo ?? "";
        comunicado.introduccion = json.introduccion ?? "";
        comunicado.lugar=json.lugar??"";
        comunicado.cuerpo=json.cuerpo??"";
        comunicado.citas=json.citas??"";
        comunicado.datosContacto=json.datosContacto??"";
        comunicado.imagenes = json.imagenes ? json.imagenes.map((imagen: any) => new Imagen().jsonToImagen(imagen)) : [];
        comunicado.createdAt = json.createdAt ? new Date(json.createdAt) : null;
        comunicado.updatedAt = json.updatedAt ? new Date(json.updatedAt) : null;
        comunicado.deletedAt = json.deletedAt ? new Date(json.deletedAt) : null;
        return comunicado;
    }
}