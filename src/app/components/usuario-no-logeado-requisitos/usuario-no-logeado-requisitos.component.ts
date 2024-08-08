import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Requisito } from 'src/app/models/Requisito';

@Component({
  selector: 'app-usuario-no-logeado-requisitos',
  templateUrl: './usuario-no-logeado-requisitos.component.html',
  styleUrls: ['./usuario-no-logeado-requisitos.component.css']
})
export class UsuarioNoLogeadoRequisitosComponent implements OnInit{
  param1:string="";
  param2:string="";
  listaRequisitos:Requisito[]=[{
    nombre:"Requisito 1",
    descripcion:"Descripcion",
    imagen:"fondo-opciones-menu.jpg"
  }];
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.param1 = params['tipo'];
      this.param2 = params['id'];
    });
  }
  
}
