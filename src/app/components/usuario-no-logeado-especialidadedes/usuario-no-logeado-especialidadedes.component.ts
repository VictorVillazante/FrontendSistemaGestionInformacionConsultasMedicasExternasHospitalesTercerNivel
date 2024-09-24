import { Component, HostListener, OnInit } from '@angular/core';
import { Especialidad } from 'src/app/models/Especialidad';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';

@Component({
  selector: 'app-usuario-no-logeado-especialidadedes',
  templateUrl: './usuario-no-logeado-especialidadedes.component.html',
  styleUrls: ['./usuario-no-logeado-especialidadedes.component.css']
})
export class UsuarioNoLogeadoEspecialidadedesComponent implements OnInit {
  obtenerEspecialidad(i:any,j:any,e:any): Especialidad {
    if(i==0 && j==0){
      this.indexEspecialidad=0;
    }
    let especialidad = new Especialidad();
    if (this.indexEspecialidad < this.listaEspecialidades.length) {
      especialidad = this.listaEspecialidades[this.indexEspecialidad];
    }
    console.log("i="+i+" tipo="+e+" j="+j+" valor="+this.indexEspecialidad);
    this.indexEspecialidad++;
    return especialidad;
  }
  listaEspecialidades: Especialidad[] = [];
  indexEspecialidad: number = 0;
  elementosMostrar: number = 0;
  constructor(private informacionCentroMedicoService: InformacionCentroMedicoService) { }
  ngOnInit(): void {
    this.indexEspecialidad = 0;
    this.obtenerEspecialidades();
  }
  get elementos(): number[] {
    return Array.from({ length: this.elementosMostrar }, (_, index) => index);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.rellenarListaEspecialidades();
  }
  obtenerEspecialidades() {
    this.informacionCentroMedicoService.obtenerEspecialidades().subscribe(
      {
        next: (resp) => {
          this.listaEspecialidades = resp;
        },
        error: (err) => {

        },
        complete: () => {
          this.rellenarListaEspecialidades();
        }
      }
    )
  }
  elementosMostrados: any = [];
  rellenarListaEspecialidades() {
    let elementos= [];
    const anchoPantalla = window.innerWidth;
    const anchoComputadoraEscritorio = 1280;
    const anchoTablet = 414;
    this.elementosMostrar = this.listaEspecialidades.length;
    let nc = 1;
    if (anchoPantalla > anchoComputadoraEscritorio) {
      nc = 4;
    } else if (anchoPantalla > anchoTablet) {
      nc = 3
    }
    let elementosInsertados = 0;
    for (let i = 0; elementosInsertados<this.elementosMostrar; i++) {
      let fila = [];
      let orden = (i % 2 == 0) ? 1 : 2;
      for (let j = 0; j < nc; j++) {
        if (orden == 1) { 
          if(j%2==0){
            fila.push(1);
            elementosInsertados++;
          }else{
            fila.push(0);
          }
        }
        if (orden == 2){
          if(j%2!=0){
            fila.push(1);
            elementosInsertados++;
          }else{
            fila.push(0);
          }
        }
      }
      elementos.push(fila);
    }
    this.indexEspecialidad=0;
    this.elementosMostrados=elementos;
    console.log(this.elementosMostrados);
  }
}
