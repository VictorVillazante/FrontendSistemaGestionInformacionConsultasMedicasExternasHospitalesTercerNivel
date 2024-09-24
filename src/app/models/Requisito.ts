import { Imagen } from "./Imagen";

export class Requisito{
    jsonToRequisito(requisito: any) {
        let req = new Requisito();
        req.idRequisito = requisito.idRequisito ?? 0;
        req.titulo = requisito.titulo ?? "";
        req.descripcion = requisito.descripcion ?? "";
        req.imagenes = requisito.imagenes ? requisito.imagenes.map((imagen: any) => new Imagen().jsonToImagen(imagen)): [];
        return req
    }
    idRequisito:number=0;
    titulo:string="";
    descripcion:string="";
    imagenes:Imagen[]=[];
}