import { Component, OnInit } from '@angular/core';
import { ExamenesComplementariosService } from '../../services/examenes-complementarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-examenes-complementarios',
  templateUrl: './gestion-examenes-complementarios.component.html',
  styleUrls: ['./gestion-examenes-complementarios.component.css']
})
export class GestionExamenesComplementariosComponent implements OnInit{
  constructor(private router:Router,private examenesComplementariosService:ExamenesComplementariosService){}
  ngOnInit(): void {
      this.examenesComplementariosService.obtenerExamenesComplementarios().subscribe(ec=>{
        this.listadoExamenesComplementarios=ec;
      })
  }
  handleExamenesComplementarios($event: any) {
    this.listadoExamenesComplementarios=$event;
  }
  actualizarExamenComplementario(id:any){
    this.router.navigate(['/medico/modificar-examen-complementaario',id]);
  }
  verDetalleExamenComplementario(id:any){
    this.router.navigate(['/detalle-examen-complmentario',id]);
  }
  listadoExamenesComplementarios:any[]=[];
}
