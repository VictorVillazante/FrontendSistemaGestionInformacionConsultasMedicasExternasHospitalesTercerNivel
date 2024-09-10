import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizacion-comunicado',
  templateUrl: './actualizacion-comunicado.component.html',
  styleUrls: ['./actualizacion-comunicado.component.css']
})
export class ActualizacionComunicadoComponent {
  formularioComunicado: FormGroup;
  imagenes: string[] = [];
  idComunicado!: number;
  constructor(private activatedRoute:ActivatedRoute,private alertasService:AlertasService,private fb: FormBuilder,private informacionCentroMedicoService:InformacionCentroMedicoService) {
    this.formularioComunicado = this.fb.group({
      titulo: ['', [Validators.required]],
      lugar: ['', [Validators.required]],
      introduccion: ['', [Validators.required]],
      cuerpo: ['', [Validators.required]],
      citas: [''],
      datos_contacto: ['']
    });
  }
  ngOnInit(): void { 
    this.activatedRoute.params.subscribe(params => {
      this.idComunicado = params['id'];
      this.obtenerComunicado(params['id']);
    })
  }
  obtenerComunicado(idComunicado: any) {
     this.informacionCentroMedicoService.obtenerComunicado(idComunicado).subscribe((comunicado:any)=>{
       this.formularioComunicado.patchValue(comunicado);
     })
  }

  onSubmit(): void {
    if (this.formularioComunicado.valid) {
      this.informacionCentroMedicoService.actualizarComunicado(this.idComunicado,this.formularioComunicado).subscribe(()=>{
        this.alertasService.mensajeConfirmacion();      
      },(error:any)=>this.alertasService.mensajeError())
    }
  }
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
}
