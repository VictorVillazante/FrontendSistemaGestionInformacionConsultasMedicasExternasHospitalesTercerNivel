import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Imagen } from 'src/app/models/Imagen';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-actualizacion-consultorio',
  templateUrl: './actualizacion-consultorio.component.html',
  styleUrls: ['./actualizacion-consultorio.component.css']
})
export class ActualizacionConsultorioComponent {
  idConsultorio!:number;
  formularioConsultorio: FormGroup;
  imagenes: Imagen[] = [];
  constructor(private activatedRoute:ActivatedRoute,private fb: FormBuilder,private informacionCentroMedicoService:InformacionCentroMedicoService,private alertasService:AlertasService) {
    this.formularioConsultorio = this.fb.group({
      nombre: ["",Validators.required],
      direccion: ["",Validators.required],
      equipamiento: [""],
      idEspecialidad: [0,Validators.required],
      nombreEspecialidad: [""],
      codigoConsultorio: ["",Validators.required],
      descripcion: ["",Validators.required],
      numeroTelefono: [ "",Validators.required],
      capacidad: [0,[Validators.required, Validators.min(1)]],
    });
  }
  ngOnInit(): void { 
    this.activatedRoute.params.subscribe((params)=>{
      this.idConsultorio=params['id'];
      this.obtenerConsultorio(this.idConsultorio);
    });
  }
  obtenerConsultorio(idConsultorio: number) {
    this.informacionCentroMedicoService.obtenerConsultorio(idConsultorio).subscribe((consultorio)=>{
      this.formularioConsultorio.setValue({
        nombre:consultorio.nombre,
        direccion:consultorio.direccion,
        equipamiento:consultorio.equipamiento,
        idEspecialidad:consultorio.idEspecialidad,
        nombreEspecialidad:consultorio.nombreEspecialidad,
        codigoConsultorio:consultorio.codigoConsultorio,
        descripcion:consultorio.descripcion,
        numeroTelefono:consultorio.numeroTelefono,
        capacidad:consultorio.capacidad
      });
      this.imagenes=consultorio.imagenes;
    });
  }


  onSubmit(): void {

    if (this.formularioConsultorio.valid) {
      this.informacionCentroMedicoService.actualizarConsultorio(this.idConsultorio,this.formularioConsultorio,this.imagenes).subscribe(()=>{
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
