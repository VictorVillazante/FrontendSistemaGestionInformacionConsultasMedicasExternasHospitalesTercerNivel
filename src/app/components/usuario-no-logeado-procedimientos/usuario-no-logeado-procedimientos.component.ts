import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialidad } from 'src/app/models/Especialidad';
import { Paso } from 'src/app/models/Paso';
import { Procedimiento } from 'src/app/models/Procedimieto';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-usuario-no-logeado-procedimientos',
  templateUrl: './usuario-no-logeado-procedimientos.component.html',
  styleUrls: ['./usuario-no-logeado-procedimientos.component.css']
})
export class UsuarioNoLogeadoProcedimientosComponent {
  redireccionarVerElementosProcedimiento(idProcedimiento: number) {
    this.router.navigate([`/procedimientos/${idProcedimiento}/elementos`]);
  }
  listadoProcedimientos:Procedimiento[]=[];
  listadoProcedimientosAux:Procedimiento[]=[];

  constructor(private router:Router,private informacionCentroMedicoService:InformacionCentroMedicoService) { }
  ngOnInit(): void {
    this.obtenerProcedimientos();
  }
  obtenerProcedimientos() {
    this.informacionCentroMedicoService.obtenerProcedimientos().subscribe((procedimientos)=>{
      this.listadoProcedimientos=procedimientos;
      this.listadoProcedimientosAux=procedimientos;
    });
  }
}
