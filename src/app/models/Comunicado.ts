export class Comunicado{
    idComunicado:number=0;
    titulo:string="";
    descripcion:string="";
    imagenes:string[]=[""];
    createdAt:Date|null=null;
    updatedAt:Date|null=null;
    deletedAt:Date|null=null;
    jsonToComunicado(json:any):Comunicado{
        let comunicado = new Comunicado();
        comunicado.idComunicado = json.idComunicado ?? 0;
        comunicado.titulo = json.titulo ?? "";
        comunicado.descripcion = json.descripcion ?? "";
        comunicado.imagenes = json.imagenes ?? [];
        comunicado.createdAt = json.createdAt ? new Date(json.createdAt) : null;
        comunicado.updatedAt = json.updatedAt ? new Date(json.updatedAt) : null;
        comunicado.deletedAt = json.deletedAt ? new Date(json.deletedAt) : null;
        return comunicado;
    }
}