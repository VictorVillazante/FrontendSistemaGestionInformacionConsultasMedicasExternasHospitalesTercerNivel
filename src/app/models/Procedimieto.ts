import { Imagen } from "./Imagen";

export class Procedimiento{
    idProcedimiento: number = 0;
    nombreProcedimiento: string = "";
    createdAt: Date | null = null;
    updatedAt: Date | null = null;
    deletedAt: Date | null = null;
    imagenes: Imagen[] = [];


    jsonToProcedimiento(json: any): Procedimiento {
        let procedimiento = new Procedimiento();
        procedimiento.idProcedimiento = json.idProcedimiento ?? 0;
        procedimiento.nombreProcedimiento = json.nombreProcedimiento ?? "";
        procedimiento.imagenes = json.imagenes  && json.imagenes.length > 0? json.imagenes.map((imagen: any) => new Imagen().jsonToImagen(imagen)): this.obtenerImagenesDefecto();
        procedimiento.createdAt = json.createdAt ? new Date(json.createdAt) : null;
        procedimiento.updatedAt = json.updatedAt ? new Date(json.updatedAt) : null;
        procedimiento.deletedAt = json.deletedAt ? new Date(json.deletedAt) : null;
        return procedimiento;
    }
    obtenerImagenesDefecto(): Imagen[] {
        let imagen = new Imagen();
        imagen.url="/assets/images/img-procedimiento-defecto.jpg";
        return [imagen];
    }
}