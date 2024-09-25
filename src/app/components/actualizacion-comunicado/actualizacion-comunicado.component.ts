import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';
import { ActivatedRoute } from '@angular/router';
import { Imagen } from 'src/app/models/Imagen';
import { Comunicado } from 'src/app/models/Comunicado';

@Component({
  selector: 'app-actualizacion-comunicado',
  templateUrl: './actualizacion-comunicado.component.html',
  styleUrls: ['./actualizacion-comunicado.component.css']
})
export class ActualizacionComunicadoComponent{
  formularioComunicado: FormGroup;
  imagenes: Imagen[] = [];
  idComunicado!: number;
  comunicado!:Comunicado;
  constructor(private activatedRoute:ActivatedRoute,private alertasService:AlertasService,private fb: FormBuilder,private informacionCentroMedicoService:InformacionCentroMedicoService) {
    console.log("constructor actualizacion comunicado");
    this.formularioComunicado = this.fb.group({
      titulo: ['', [Validators.required]],
      lugar: ['', [Validators.required]],
      introduccion: ['', [Validators.required]],
      cuerpo: ['', [Validators.required]],
      citas: [''],
      datosContacto: ['']
    });
    console.log(this.idComunicado);
  }
  ngOnInit(): void { 
    this.activatedRoute.params.subscribe((params) => {
      this.idComunicado = params['id'];
      this.obtenerComunicado(this.idComunicado);

    })
  }
  obtenerComunicado(idComunicado: any) {
     this.informacionCentroMedicoService.obtenerComunicado(idComunicado).subscribe((comunicado)=>{
       this.comunicado=comunicado;
      console.log(this.idComunicado);
       this.formularioComunicado.setValue({titulo:comunicado.titulo,lugar:comunicado.lugar,introduccion:comunicado.introduccion,cuerpo:comunicado.cuerpo,citas:comunicado.citas,datosContacto:comunicado.datosContacto});
       this.imagenes = comunicado.imagenes;
     })
  }

  onSubmit(): void {
    if (this.formularioComunicado.valid) {
      this.informacionCentroMedicoService.actualizarComunicado(this.idComunicado,this.formularioComunicado,this.imagenes).subscribe(()=>{
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
