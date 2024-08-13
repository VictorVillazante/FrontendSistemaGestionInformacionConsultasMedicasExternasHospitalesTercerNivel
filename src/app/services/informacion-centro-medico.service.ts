import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';
import { Noticia } from '../models/Noticia';
import { MedicoEspecialista } from '../models/MedicoEspecialista';
import { Especialidad } from '../models/Especialidades';

@Injectable({
  providedIn: 'root'
})
export class InformacionCentroMedicoService {
  obtenerEspecialidad(idEspecialidad: number):Observable<Especialidad> {
    return of({
      img:"doctor-home.png",
      name:"Ginecología"
    },);
  }
  obtenerInformacionMedico(id:number):Observable<MedicoEspecialista> {
    return of({
      nombres:"Juan Jose",
      apellidos:"Ibañez",
      descripcion:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis sapien eu est lobortis, sit amet aliquam diam iaculis. Nulla pulvinar lacus mauris, in convallis odio elementum eu. Duis a dolor feugiat, accumsan libero a, volutpat risus. Cras at pretium ante. Nullam condimentum purus tortor, nec sagittis ipsum mattis a. Nam molestie mollis mauris, ut convallis diam molestie eget. Nulla eu diam at felis porttitor dapibus. Nam luctus augue ut nisl euismod, eu suscipit velit gravida. Integer fermentum mi quis quam consectetur ultrices. Nullam in mauris a augue tempus commodo ut ac neque. Pellentesque in arcu purus. Sed eu sem turpis. Morbi sit amet ligula consectetur, ultrices risus id, fermentum orci. Aenean feugiat interdum finibus. In lectus nibh, sodales vitae velit eu, tincidunt sagittis ante. Duis hendrerit vel felis in elementum. Vivamus rutrum viverra metus cursus consequat. Morbi eget sodales leo, in pretium massa. Cras nec sagittis purus. Aenean semper, augue vitae vehicula vestibulum, lacus mi laoreet erat, non tincidunt ligula elit pharetra neque. Praesent sit amet felis pharetra, ultrices tortor at, laoreet felis. Morbi lacinia quis nisi quis lacinia. Nullam eget turpis ligula. Fusce sit amet rhoncus est. Integer vulputate ornare tincidunt. Quisque eget ullamcorper quam. Cras nunc turpis, blandit et ante nec, tempus posuere orci.  Vivamus lobortis odio vitae posuere pellentesque. Vestibulum nisi arcu, feugiat sed tristique vitae, fringilla id ante. Praesent eget bibendum nunc. Fusce dictum, nisi non suscipit blandit, arcu lorem tincidunt nunc, in bibendum enim nunc nec diam. Nulla orci lectus, feugiat vel imperdiet in, vulputate et turpis. Mauris semper metus velit, interdum gravida nulla fermentum id. In sed arcu est. ",
      imagen:"fondo-opciones-menu.jpg"
    });
  }
  obtenerNoticia(id:number):Observable<Noticia>{
    return of({
      titulo: "Noticia n",
      descripcion: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis sapien eu est lobortis, sit amet aliquam diam iaculis. Nulla pulvinar lacus mauris, in convallis odio elementum eu. Duis a dolor feugiat, accumsan libero a, volutpat risus. Cras at pretium ante. Nullam condimentum purus tortor, nec sagittis ipsum mattis a. Nam molestie mollis mauris, ut convallis diam molestie eget. Nulla eu diam at felis porttitor dapibus. Nam luctus augue ut nisl euismod, eu suscipit velit gravida. Integer fermentum mi quis quam consectetur ultrices. Nullam in mauris a augue tempus commodo ut ac neque. Pellentesque in arcu purus. Sed eu sem turpis."+
      "\norbi sit amet ligula consectetur, ultrices risus id, fermentum orci.Aenean feugiat interdum finibus.In lectus nibh, sodales vitae velit eu, tincidunt sagittis ante.Duis hendrerit vel felis in elementum.Vivamus rutrum viverra metus cursus consequat.Morbi eget sodales leo, in pretium massa.Cras nec sagittis purus.Aenean semper, augue vitae vehicula vestibulum, lacus mi laoreet erat, non tincidunt ligula elit pharetra neque.Praesent sit amet felis pharetra, ultrices tortor at, laoreet felis.Morbi lacinia quis nisi quis lacinia.Nullam eget turpis ligula.Fusce sit amet rhoncus est.Integer vulputate ornare tincidunt.Quisque eget ullamcorper quam.Cras nunc turpis, blandit et ante nec, tempus posuere orci."+
      "\nVivamus lobortis odio vitae posuere pellentesque.Vestibulum nisi arcu, feugiat sed tristique vitae, fringilla id ante.Praesent eget bibendum nunc.Fusce dictum, nisi non suscipit blandit, arcu lorem tincidunt nunc, in bibendum enim nunc nec diam.Nulla orci lectus, feugiat vel imperdiet in, vulputate et turpis.Mauris semper metus velit, interdum gravida nulla fermentum id.In sed arcu est."+
      "\nMaecenas sodales sollicitudin eros.Aenean id ex ut lectus molestie fringilla vehicula et dolor.Integer ullamcorper varius massa eu aliquam.Morbi maximus posuere velit vulputate interdum.Proin dignissim nibh a orci ullamcorper, vel placerat augue auctor.Sed posuere facilisis sapien, id aliquam ante semper eu.Cras quis nulla convallis, facilisis metus quis, facilisis urna.Proin feugiat cursus tempus.Duis sed felis sit amet lorem mollis facilisis mattis a orci.Nunc id felis in augue euismod rhoncus.Donec non magna tellus.Interdum et malesuada fames ac ante ipsum primis in faucibus.Integer fermentum elementum magna vitae ultrices.Nullam iaculis felis quis turpis bibendum, quis venenatis nisi aliquet. ",
      imagen: "fondo-opciones-menu.jpg"
    });
  }
  obtenerNoticias():Observable<Noticia[]>{
    return of([{
      titulo: "Noticia n",
      descripcion: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis sapien eu est lobortis, sit amet aliquam diam iaculis. Nulla pulvinar lacus mauris, in convallis odio elementum eu. Duis a dolor feugiat, accumsan libero a, volutpat risus. Cras at pretium ante. Nullam condimentum purus tortor, nec sagittis ipsum mattis a. Nam molestie mollis mauris, ut convallis diam molestie eget. Nulla eu diam at felis porttitor dapibus. Nam luctus augue ut nisl euismod, eu suscipit velit gravida. Integer fermentum mi quis quam consectetur ultrices. Nullam in mauris a augue tempus commodo ut ac neque. Pellentesque in arcu purus. Sed eu sem turpis."+
      "\norbi sit amet ligula consectetur, ultrices risus id, fermentum orci.Aenean feugiat interdum finibus.In lectus nibh, sodales vitae velit eu, tincidunt sagittis ante.Duis hendrerit vel felis in elementum.Vivamus rutrum viverra metus cursus consequat.Morbi eget sodales leo, in pretium massa.Cras nec sagittis purus.Aenean semper, augue vitae vehicula vestibulum, lacus mi laoreet erat, non tincidunt ligula elit pharetra neque.Praesent sit amet felis pharetra, ultrices tortor at, laoreet felis.Morbi lacinia quis nisi quis lacinia.Nullam eget turpis ligula.Fusce sit amet rhoncus est.Integer vulputate ornare tincidunt.Quisque eget ullamcorper quam.Cras nunc turpis, blandit et ante nec, tempus posuere orci."+
      "\nVivamus lobortis odio vitae posuere pellentesque.Vestibulum nisi arcu, feugiat sed tristique vitae, fringilla id ante.Praesent eget bibendum nunc.Fusce dictum, nisi non suscipit blandit, arcu lorem tincidunt nunc, in bibendum enim nunc nec diam.Nulla orci lectus, feugiat vel imperdiet in, vulputate et turpis.Mauris semper metus velit, interdum gravida nulla fermentum id.In sed arcu est."+
      "\nMaecenas sodales sollicitudin eros.Aenean id ex ut lectus molestie fringilla vehicula et dolor.Integer ullamcorper varius massa eu aliquam.Morbi maximus posuere velit vulputate interdum.Proin dignissim nibh a orci ullamcorper, vel placerat augue auctor.Sed posuere facilisis sapien, id aliquam ante semper eu.Cras quis nulla convallis, facilisis metus quis, facilisis urna.Proin feugiat cursus tempus.Duis sed felis sit amet lorem mollis facilisis mattis a orci.Nunc id felis in augue euismod rhoncus.Donec non magna tellus.Interdum et malesuada fames ac ante ipsum primis in faucibus.Integer fermentum elementum magna vitae ultrices.Nullam iaculis felis quis turpis bibendum, quis venenatis nisi aliquet. ",
      imagen: "fondo-opciones-menu.jpg"
    },{
      titulo: "Noticia n",
      descripcion: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis sapien eu est lobortis, sit amet aliquam diam iaculis. Nulla pulvinar lacus mauris, in convallis odio elementum eu. Duis a dolor feugiat, accumsan libero a, volutpat risus. Cras at pretium ante. Nullam condimentum purus tortor, nec sagittis ipsum mattis a. Nam molestie mollis mauris, ut convallis diam molestie eget. Nulla eu diam at felis porttitor dapibus. Nam luctus augue ut nisl euismod, eu suscipit velit gravida. Integer fermentum mi quis quam consectetur ultrices. Nullam in mauris a augue tempus commodo ut ac neque. Pellentesque in arcu purus. Sed eu sem turpis."+
      "\norbi sit amet ligula consectetur, ultrices risus id, fermentum orci.Aenean feugiat interdum finibus.In lectus nibh, sodales vitae velit eu, tincidunt sagittis ante.Duis hendrerit vel felis in elementum.Vivamus rutrum viverra metus cursus consequat.Morbi eget sodales leo, in pretium massa.Cras nec sagittis purus.Aenean semper, augue vitae vehicula vestibulum, lacus mi laoreet erat, non tincidunt ligula elit pharetra neque.Praesent sit amet felis pharetra, ultrices tortor at, laoreet felis.Morbi lacinia quis nisi quis lacinia.Nullam eget turpis ligula.Fusce sit amet rhoncus est.Integer vulputate ornare tincidunt.Quisque eget ullamcorper quam.Cras nunc turpis, blandit et ante nec, tempus posuere orci."+
      "\nVivamus lobortis odio vitae posuere pellentesque.Vestibulum nisi arcu, feugiat sed tristique vitae, fringilla id ante.Praesent eget bibendum nunc.Fusce dictum, nisi non suscipit blandit, arcu lorem tincidunt nunc, in bibendum enim nunc nec diam.Nulla orci lectus, feugiat vel imperdiet in, vulputate et turpis.Mauris semper metus velit, interdum gravida nulla fermentum id.In sed arcu est."+
      "\nMaecenas sodales sollicitudin eros.Aenean id ex ut lectus molestie fringilla vehicula et dolor.Integer ullamcorper varius massa eu aliquam.Morbi maximus posuere velit vulputate interdum.Proin dignissim nibh a orci ullamcorper, vel placerat augue auctor.Sed posuere facilisis sapien, id aliquam ante semper eu.Cras quis nulla convallis, facilisis metus quis, facilisis urna.Proin feugiat cursus tempus.Duis sed felis sit amet lorem mollis facilisis mattis a orci.Nunc id felis in augue euismod rhoncus.Donec non magna tellus.Interdum et malesuada fames ac ante ipsum primis in faucibus.Integer fermentum elementum magna vitae ultrices.Nullam iaculis felis quis turpis bibendum, quis venenatis nisi aliquet. ",
      imagen: "fondo-opciones-menu.jpg"
    },{
      titulo: "Noticia n",
      descripcion: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis sapien eu est lobortis, sit amet aliquam diam iaculis. Nulla pulvinar lacus mauris, in convallis odio elementum eu. Duis a dolor feugiat, accumsan libero a, volutpat risus. Cras at pretium ante. Nullam condimentum purus tortor, nec sagittis ipsum mattis a. Nam molestie mollis mauris, ut convallis diam molestie eget. Nulla eu diam at felis porttitor dapibus. Nam luctus augue ut nisl euismod, eu suscipit velit gravida. Integer fermentum mi quis quam consectetur ultrices. Nullam in mauris a augue tempus commodo ut ac neque. Pellentesque in arcu purus. Sed eu sem turpis."+
      "\norbi sit amet ligula consectetur, ultrices risus id, fermentum orci.Aenean feugiat interdum finibus.In lectus nibh, sodales vitae velit eu, tincidunt sagittis ante.Duis hendrerit vel felis in elementum.Vivamus rutrum viverra metus cursus consequat.Morbi eget sodales leo, in pretium massa.Cras nec sagittis purus.Aenean semper, augue vitae vehicula vestibulum, lacus mi laoreet erat, non tincidunt ligula elit pharetra neque.Praesent sit amet felis pharetra, ultrices tortor at, laoreet felis.Morbi lacinia quis nisi quis lacinia.Nullam eget turpis ligula.Fusce sit amet rhoncus est.Integer vulputate ornare tincidunt.Quisque eget ullamcorper quam.Cras nunc turpis, blandit et ante nec, tempus posuere orci."+
      "\nVivamus lobortis odio vitae posuere pellentesque.Vestibulum nisi arcu, feugiat sed tristique vitae, fringilla id ante.Praesent eget bibendum nunc.Fusce dictum, nisi non suscipit blandit, arcu lorem tincidunt nunc, in bibendum enim nunc nec diam.Nulla orci lectus, feugiat vel imperdiet in, vulputate et turpis.Mauris semper metus velit, interdum gravida nulla fermentum id.In sed arcu est."+
      "\nMaecenas sodales sollicitudin eros.Aenean id ex ut lectus molestie fringilla vehicula et dolor.Integer ullamcorper varius massa eu aliquam.Morbi maximus posuere velit vulputate interdum.Proin dignissim nibh a orci ullamcorper, vel placerat augue auctor.Sed posuere facilisis sapien, id aliquam ante semper eu.Cras quis nulla convallis, facilisis metus quis, facilisis urna.Proin feugiat cursus tempus.Duis sed felis sit amet lorem mollis facilisis mattis a orci.Nunc id felis in augue euismod rhoncus.Donec non magna tellus.Interdum et malesuada fames ac ante ipsum primis in faucibus.Integer fermentum elementum magna vitae ultrices.Nullam iaculis felis quis turpis bibendum, quis venenatis nisi aliquet. ",
      imagen: "fondo-opciones-menu.jpg"
    },{
      titulo: "Noticia n",
      descripcion: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis sapien eu est lobortis, sit amet aliquam diam iaculis. Nulla pulvinar lacus mauris, in convallis odio elementum eu. Duis a dolor feugiat, accumsan libero a, volutpat risus. Cras at pretium ante. Nullam condimentum purus tortor, nec sagittis ipsum mattis a. Nam molestie mollis mauris, ut convallis diam molestie eget. Nulla eu diam at felis porttitor dapibus. Nam luctus augue ut nisl euismod, eu suscipit velit gravida. Integer fermentum mi quis quam consectetur ultrices. Nullam in mauris a augue tempus commodo ut ac neque. Pellentesque in arcu purus. Sed eu sem turpis."+
      "\norbi sit amet ligula consectetur, ultrices risus id, fermentum orci.Aenean feugiat interdum finibus.In lectus nibh, sodales vitae velit eu, tincidunt sagittis ante.Duis hendrerit vel felis in elementum.Vivamus rutrum viverra metus cursus consequat.Morbi eget sodales leo, in pretium massa.Cras nec sagittis purus.Aenean semper, augue vitae vehicula vestibulum, lacus mi laoreet erat, non tincidunt ligula elit pharetra neque.Praesent sit amet felis pharetra, ultrices tortor at, laoreet felis.Morbi lacinia quis nisi quis lacinia.Nullam eget turpis ligula.Fusce sit amet rhoncus est.Integer vulputate ornare tincidunt.Quisque eget ullamcorper quam.Cras nunc turpis, blandit et ante nec, tempus posuere orci."+
      "\nVivamus lobortis odio vitae posuere pellentesque.Vestibulum nisi arcu, feugiat sed tristique vitae, fringilla id ante.Praesent eget bibendum nunc.Fusce dictum, nisi non suscipit blandit, arcu lorem tincidunt nunc, in bibendum enim nunc nec diam.Nulla orci lectus, feugiat vel imperdiet in, vulputate et turpis.Mauris semper metus velit, interdum gravida nulla fermentum id.In sed arcu est."+
      "\nMaecenas sodales sollicitudin eros.Aenean id ex ut lectus molestie fringilla vehicula et dolor.Integer ullamcorper varius massa eu aliquam.Morbi maximus posuere velit vulputate interdum.Proin dignissim nibh a orci ullamcorper, vel placerat augue auctor.Sed posuere facilisis sapien, id aliquam ante semper eu.Cras quis nulla convallis, facilisis metus quis, facilisis urna.Proin feugiat cursus tempus.Duis sed felis sit amet lorem mollis facilisis mattis a orci.Nunc id felis in augue euismod rhoncus.Donec non magna tellus.Interdum et malesuada fames ac ante ipsum primis in faucibus.Integer fermentum elementum magna vitae ultrices.Nullam iaculis felis quis turpis bibendum, quis venenatis nisi aliquet. ",
      imagen: "fondo-opciones-menu.jpg"
    }]);
  }
  registrarTurnoAtencion(formularioTurnoAtencionMedica:any) {
    let formularioTurnoAtencionMedicaAux=formularioTurnoAtencionMedica.value;
    // return this.http.post("http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/horarios-atencion-medica",{
    //   "idConsultorio":formularioTurnoAtencionMedicaAux.idConsultorio,
    //   "idMedico":formularioTurnoAtencionMedicaAux.idMedico,
    //   "idTurno":formularioTurnoAtencionMedicaAux.idTurno,
    //   "numeroFichasDisponible":formularioTurnoAtencionMedicaAux.numeroFichasDisponible,
    //   "fecha":formularioTurnoAtencionMedicaAux.fecha
    // });
    return this.http.post(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/horarios-atencion-medica`,{
      "idConsultorio":formularioTurnoAtencionMedicaAux.idConsultorio,
      "idMedico":formularioTurnoAtencionMedicaAux.idMedico,
      "idTurno":formularioTurnoAtencionMedicaAux.idTurno,
      "numeroFichasDisponible":formularioTurnoAtencionMedicaAux.numeroFichasDisponible,
      "fecha":formularioTurnoAtencionMedicaAux.fecha
    });
  }
  obtenerTurnosAtencionMedica() {
    // return of([
    //   [
    //     1,
    //     "A12",
    //     "turno mañana",
    //     "medico1",
    //     "ginecologia"
    //   ],
    //   [
    //     2,
    //     "A15",
    //     "turno mañana",
    //     "medico3",
    //     "neurologia"
    //   ],
    //   [
    //     3,
    //     "B12",
    //     "turno tarde",
    //     "medico3",
    //     "traumatologia"
    //   ]
    // ]);
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/horarios-atencion-medica`);
    //return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/horarios-atencion-medica`);
  }
  obtenerConsultorios() {
    //return of([]);
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/consultorios`);
    //return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/consultorios`);
    //throw new Error('Method not implemented.');
  }
  obtenerEspecialidades() {
    return of([
      {
        img:"doctor-home.png",
        name:"Ginecología"
      },
      {
        img:"fondo-opciones-menu.jpg",
        name:"Medicina general"
      },
      {
        img:"doctor-home.png",
        name:"Ginecología"
      },
      {
        img:"fondo-opciones-menu.jpg",
        name:"Medicina general"
      }
    ]);
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/especialidades`);
    //return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/especialidades`);
    //throw new Error('Method not implemented.');
  }
  obtenerTurnos() {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/turnos`);
    // return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/turnos`);
    // return of([]);
    // throw new Error('Method not implemented.');
  }
  obtenerMedicos() {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/medicos`);
    // return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/medicos`);
    // return of([]);
    // throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
}
