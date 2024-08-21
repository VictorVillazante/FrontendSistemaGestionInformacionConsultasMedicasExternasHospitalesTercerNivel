import { Especialidad } from "./Especialidad";

export class MedicoEspecialista{
    id:number=0;
    imagen:string="";
    nombres:string="";
    apellidos:string="";
    email:string="";
    celular:string="";
    aniosExperiencia:number=0;
    especialidades:any[]=[];
    idiomas:any[]=[];
    turnosAtencionMedica:any[]=[];
    descripcion:string="";
}