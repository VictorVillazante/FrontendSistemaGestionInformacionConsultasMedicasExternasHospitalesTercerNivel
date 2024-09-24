export class Imagen{
    idImagen:number=0;
    nombre:string="";
    tipo:string="";
    url:string="";
    createdAt:Date|null=null;
    updatedAt:Date|null=null;
    deletedAt:Date|null=null;

    jsonToImagen(json: any): Imagen {
        let imagen = new Imagen();
        imagen.idImagen = json.idImagen ?? 0;
        imagen.nombre = json.nombre ?? "";
        imagen.tipo = json.tipo ?? "";
        imagen.url = json.url ?? "";
        imagen.createdAt = json.createdAt ? new Date(json.createdAt) : null;
        imagen.updatedAt = json.updatedAt ? new Date(json.updatedAt) : null;
        imagen.deletedAt = json.deletedAt ? new Date(json.deletedAt) : null;
        return imagen;
    }
}