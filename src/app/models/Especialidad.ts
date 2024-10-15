import { Imagen } from "./Imagen";
import { Paso } from "./Paso";
import { Requisito } from "./Requisito";

export class Especialidad{
    idEspecialidad:number=0;
    nombre:string="";
    descripcion:string="";
    imagenes:Imagen[]=[];
    // requisitosSolicitudFichaMedica:Requisito[]=[];
    // requisitosMinimosAtencionConsultaExterna:Requisito[]=[];
    // procedimientoObtencionFichaMedicaPresencial:PasoProcedimiento[]=[];
    fechaCreacion:Date|null=null;
    createdAt:Date|null=null;
    updatedAt:Date|null=null;
    deletedAt:Date|null=null;
    jsonToEspecialidad(json:any){
        let especialidad = new Especialidad();
        especialidad.idEspecialidad = json.idEspecialidad || 0;
        especialidad.nombre = json.nombre || "";
        especialidad.descripcion = json.descripcion || "";
        especialidad.imagenes = json.imagenes && json.imagenes.length > 0 ? json.imagenes.map((imagen: any) => new Imagen().jsonToImagen(imagen)) : this.agregarImagenDefecto();
        especialidad.fechaCreacion = json.fechaCreacion ? new Date(json.fechaCreacion) : null;
        especialidad.createdAt = json.createdAt ? new Date(json.createdAt) : null;
        especialidad.updatedAt = json.updatedAt ? new Date(json.updatedAt) : null;
        especialidad.deletedAt = json.deletedAt ? new Date(json.deletedAt) : null;
        return especialidad;
    }
    agregarImagenDefecto(): Imagen[] {
        let imagen = new Imagen();
        imagen.url="/assets/images/especialidades-descripcion.jpg";
        return [imagen];
    }
}