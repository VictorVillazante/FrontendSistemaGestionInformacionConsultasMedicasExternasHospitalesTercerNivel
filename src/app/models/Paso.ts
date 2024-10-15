import { Imagen } from "./Imagen";

export class Paso{
    jsonToPaso(paso: any) {
        let pasoProcedimiento = new Paso();
        pasoProcedimiento.idPaso = paso.idPaso ?? 0;
        pasoProcedimiento.nombre = paso.nombre ?? "";
        pasoProcedimiento.descripcion = paso.descripcion ?? "";
        pasoProcedimiento.imagenes = paso.imagenes  && paso.imagenes.length > 0? paso.imagenes.map((imagen: any) => new Imagen().jsonToImagen(imagen)): this.obtenerImagenesDefecto();
        return pasoProcedimiento
    }
    obtenerImagenesDefecto(): Imagen[] {
        let imagen = new Imagen();
        imagen.url="/assets/images/img-doctor-defecto.jpg";
        return [imagen];
    }
    idPaso:number=0;
    nombre:string="";
    descripcion:string="";
    imagenes:Imagen[]=[];
}