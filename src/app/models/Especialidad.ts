import { PasoProcedimiento } from "./PasoProcedimiento";
import { Requisito } from "./Requisito";

export class Especialidad{
    idEspecialidad:number=0;
    nombre:string="";
    descripcion:string="";
    img:string="";
    requisitosSolicitudFichaMedica:Requisito[]=[];
    requisitosMinimosAtencionConsultaExterna:Requisito[]=[];
    procedimientoObtencionFichaMedicaPresencial:PasoProcedimiento[]=[];
    fechaCreacion:Date|null=null;
    createdAt:Date|null=null;
    updatedAt:Date|null=null;
    deletedAt:Date|null=null;
    constructor(json: any){
    this.idEspecialidad = json.idEspecialidad || 0;
    this.nombre = json.nombre || "";
    this.descripcion = json.descripcion || "";
    this.img = json.img || "";
    this.requisitosSolicitudFichaMedica = json.requisitosSolicitudFichaMedica?.map((req: any) => {
        const requisito = new Requisito();
        requisito.idRequisito = req.idRequisito || 0;
        requisito.nombre = req.nombre || "";
        requisito.descripcion = req.descripcion || "";
        requisito.imagenes = req.imagenes || [];
        return requisito;
    }) || [];
    this.requisitosMinimosAtencionConsultaExterna = json.requisitosMinimosAtencionConsultaExterna?.map((req: any) => {
        const requisito = new Requisito();
        requisito.idRequisito = req.idRequisito || 0;
        requisito.nombre = req.nombre || "";
        requisito.descripcion = req.descripcion || "";
        requisito.imagenes = req.imagenes || [];
        return requisito;
    }) || [];
    this.procedimientoObtencionFichaMedicaPresencial = json.procedimientoObtencionFichaMedicaPresencial?.map((paso: any) => {
        const procedimiento = new PasoProcedimiento();
        procedimiento.idPasoProcedimiento = paso.idPasoProcedimiento || 0;
        procedimiento.nombre = paso.nombre || "";
        procedimiento.descripcion = paso.descripcion || "";
        procedimiento.imagenes = paso.imagenes || [];
        return procedimiento;
    }) || [];
    this.fechaCreacion = json.fechaCreacion ? new Date(json.fechaCreacion) : null;
    this.createdAt = json.createdAt ? new Date(json.createdAt) : null;
    this.updatedAt = json.updatedAt ? new Date(json.updatedAt) : null;
    this.deletedAt = json.deletedAt ? new Date(json.deletedAt) : null;
    }
}