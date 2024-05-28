import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MedicosService } from 'src/app/services/medicos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-medico',
  templateUrl: './registro-medico.component.html',
  styleUrls: ['./registro-medico.component.css']
})
export class RegistroMedicoComponent {
  id:any;
  formularioRegistroMedico: FormGroup;
  imagenSeleccionada: File | null = null; 
  constructor(private medicosService:MedicosService,private fb: FormBuilder) { 
    this.formularioRegistroMedico = this.fb.group({
      nombres:[''],
      apellidoPaterno:[''],
      apellidoMaterno:[''],
      ci:[''],
      direccion:[''],
      celular:[''],
      email:[''],
      anosExperiencia:[''],
      salario:[''],
      foto:[''],
      grupoSanguineo:['']
    });
  }

  onSubmit() {
    const formValues = this.formularioRegistroMedico.value;
    const formData = new FormData();
    console.log(formValues);
    for (const key in formValues) {
      if (formValues.hasOwnProperty(key)) {
        formData.append(key, formValues[key]);
      }
    }
    if (this.imagenSeleccionada) {
      formData.append('image', this.imagenSeleccionada, this.imagenSeleccionada.name);
    }
    Swal.fire({
      text:"Estas seguro de realizar la accion?",
      showDenyButton: true,
      confirmButtonText: 'Si',
      confirmButtonColor: '#28afb0',
      denyButtonColor: '#0a4a6e',
      denyButtonText: `Cancelar`,
      heightAuto:false,
      scrollbarPadding:true
    }).then((result) => {
      if (result.isConfirmed) {
        this.medicosService.registrarMedico(formData).subscribe((data:any)=>{
          Swal.fire({
            icon: 'success',
            text:"Se realizo la accion correctamente",
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#28afb0',
            heightAuto:false,
            scrollbarPadding:true,
          })
        },
        (error: any) => {
          Swal.fire({
            icon: 'error',
            text:"Error al realizar la accion",
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#28afb0',
            heightAuto:false,
            scrollbarPadding:true,
          })
        });
      }
    });
    
  }
  onImageChange(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.imagenSeleccionada = event.target.files[0];
    }
  }
}
