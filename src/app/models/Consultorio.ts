import { Imagen } from "./Imagen";

export class Consultorio{
    idConsultorio:number=0;
    nombre:string="";
    direccion:string="";
    equipamiento:string="";
    idEspecialidad:number=0;
    nombreEspecialidad:string="";
    codigoConsultorio:string="";
    descripcion:string="";
    numeroTelefono:string="";
    capacidad:number=0;
    createdAt:Date|null=null;
    updatedAt:Date|null=null;
    deletedAt:Date|null=null;
    imagenes:Imagen[]=[];
    jsonToConsultorio(json:any):Consultorio{
        let consultorio = new Consultorio();
        consultorio.idConsultorio=json.idConsultorio??0;
        consultorio.nombre=json.nombre??"";
        consultorio.direccion=json.direccion??"";
        consultorio.equipamiento=json.equipamiento??"";
        consultorio.idEspecialidad=json.idEspecialidad??0;
        consultorio.nombreEspecialidad=json.nombreEspecialidad??"";
        consultorio.codigoConsultorio=json.codigoConsultorio??"";
        consultorio.descripcion=json.descripcion??"";
        consultorio.numeroTelefono=json.numeroTelefono??"";
        consultorio.capacidad=json.capacidad??0;
        consultorio.createdAt = json.createdAt ? new Date(json.createdAt) : null;
        consultorio.updatedAt = json.updatedAt ? new Date(json.updatedAt) : null;
        consultorio.deletedAt = json.deletedAt ? new Date(json.deletedAt) : null;
        consultorio.imagenes = json.imagenes ? json.imagenes.map((imagen: any) => new Imagen().jsonToImagen(imagen)) : [];
        return consultorio;
    }
}