import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';
import { ActivatedRoute } from '@angular/router';
import { AlertasService } from '../../services/alertas.service';

@Component({
  selector: 'app-actualizacion-especialidad',
  templateUrl: './actualizacion-especialidad.component.html',
  styleUrls: ['./actualizacion-especialidad.component.css']
})
export class ActualizacionEspecialidadComponent {
  idEspecialidad!:number;
  formularioEspecialidad: FormGroup;
  imagenes: string[] = [];
  constructor(private activatedRoute:ActivatedRoute,private fb: FormBuilder,private informacionCentroMedicoService:InformacionCentroMedicoService,private alertasService:AlertasService) {
    this.formularioEspecialidad = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }
  ngOnInit(): void { 
    this.activatedRoute.params.subscribe((params)=>{
      this.idEspecialidad=params['id'];
      this.obtenerEspecialidad(this.idEspecialidad);
    });
  }
  obtenerEspecialidad(idEspecialidad: number) {
    this.informacionCentroMedicoService.obtenerEspecialidad(idEspecialidad).subscribe((especialidad)=>{
      this.formularioEspecialidad.value.nombre=especialidad.nombre;
      this.formularioEspecialidad.value.descripcion=especialidad.descripcion;
    });
  }

  onSubmit(): void {
    if (this.formularioEspecialidad.valid) {
      this.informacionCentroMedicoService.actualizarEspecialidad(this.idEspecialidad,this.formularioEspecialidad).subscribe(()=>{
        this.alertasService.mensajeConfirmacion();      
      },(error:any)=>{
        this.alertasService.mensajeError();
      })
    }
  }
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
}