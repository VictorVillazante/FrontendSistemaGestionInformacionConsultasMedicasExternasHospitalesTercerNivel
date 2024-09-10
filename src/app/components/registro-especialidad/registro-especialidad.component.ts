import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';

@Component({
  selector: 'app-registro-especialidad',
  templateUrl: './registro-especialidad.component.html',
  styleUrls: ['./registro-especialidad.component.css']
})
export class RegistroEspecialidadComponent {
 
  formularioEspecialidad: FormGroup;
  imagenes: string[] = [];
  constructor(private fb: FormBuilder,private informacionCentroMedicoService:InformacionCentroMedicoService) {
    this.formularioEspecialidad = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }
  ngOnInit(): void { }

  onSubmit(): void {
    if (this.formularioEspecialidad.valid) {
      this.informacionCentroMedicoService.registrarEspecialidad(this.formularioEspecialidad).subscribe(()=>{

      },(error:any)=>{

      })
    }
  }
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
}
