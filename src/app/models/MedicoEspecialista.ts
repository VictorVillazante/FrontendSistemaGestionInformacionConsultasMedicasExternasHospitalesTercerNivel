import { Especialidad } from "./Especialidad";
import { Imagen } from "./Imagen";

export class MedicoEspecialista{
    idUsuario:number=0;
    imagenes:Imagen[]=[];
    nombres:string="";
    apellidoPaterno:string="";
    apellidoMaterno:string="";
    ci:string="";
    email:string="";
    celular:string="";
    
    aniosExperiencia:number=0;
    especialidades:any[]=[];
    turnosAtencionMedica:any[]=[];
    descripcion:string="";

    jsonToMedicoEspecialista(json: any): MedicoEspecialista {
        let medico = new MedicoEspecialista();
        medico.idUsuario = json.idUsuario ?? 0;
        medico.nombres = json.nombres ?? "";
        medico.apellidoPaterno = json.apellidoPaterno ?? "";
        medico.apellidoMaterno = json.apellidoMaterno ?? "";
        medico.ci = json.ci ?? "";
        medico.email = json.email ?? "";
        medico.celular = json.celular ?? "";
        medico.aniosExperiencia = json.aniosExperiencia ?? 0;
        medico.imagenes = json.imagenes && json.imagenes.length > 0 ? json.imagenes.map((img: any) => new Imagen().jsonToImagen(img)) : this.obtenerImagenesDefecto();
        medico.especialidades = json.especialidades ? json.especialidades.map((esp: any) => new Especialidad().jsonToEspecialidad(esp)) : [];
        medico.turnosAtencionMedica = json.turnosAtencionMedica ?? [];
        medico.descripcion = json.descripcion ?? "";
        console.log(medico);
        return medico;
    }
    obtenerImagenesDefecto(): Imagen[] {
        let imagen = new Imagen();
        imagen.url="/assets/images/img-doctor-defecto.jpg";
        return [imagen];
    }
}