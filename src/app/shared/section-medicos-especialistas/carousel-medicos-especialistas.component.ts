import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MedicoEspecialista } from 'src/app/models/MedicoEspecialista';
import { ScriptsService } from 'src/app/services/scripts.service';
import { v4 as uuidv4 } from 'uuid';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';
import { MedicosService } from 'src/app/services/medicos.service';

@Component({
  selector: 'app-carousel-medicos-especialistas',
  templateUrl: './carousel-medicos-especialistas.component.html',
  styleUrls: ['./carousel-medicos-especialistas.component.css']
})
export class CarouselMedicosEspecialistasComponent implements AfterViewInit,OnInit{
  id:string=uuidv4().replace(/-/g,"");
  constructor(private medicosService:MedicosService,private scriptsService:ScriptsService){}
  ngAfterViewInit(): void {
    this.scriptsService.cargarCarousel(this.id);
  }
  ngOnInit(): void {
    this.medicosService.obtenerMedicos().subscribe(medicos=>{
      this.listadoMedicosEspecialistas=medicos;
    });
  }
  listadoMedicosEspecialistas:MedicoEspecialista[]=[];
}
