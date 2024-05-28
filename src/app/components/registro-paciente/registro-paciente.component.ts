import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PacientesService } from 'src/app/services/pacientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.component.html',
  styleUrls: ['./registro-paciente.component.css']
})
export class RegistroPacienteComponent {
  id:any;
  formularioRegistroPaciente: FormGroup;
  imagenSeleccionada: File | null = null; 
  constructor(private pacientesService:PacientesService,private fb: FormBuilder) { 
    this.formularioRegistroPaciente = this.fb.group({
      apellidoPaterno:[''],
      apellidoMaterno:[''],
      nombres:[''],
      fechaNacimiento:[''],
      sexo:[''],
      procedencia:[''],
      fechaIngreso:[''],
      idiomaHablado:[''],
      autoprescedenciaCultural:[''],
      ocupacion:[''],
      apoyoDecisionAsistenciaMedica:[''],
      estadoCivil:[''],
      escolaridad:[''],
      grupoSanguineo:[''],
      ci:[''],
      email:[''],
      celular:[''],
      diasSancion:[''],
      edad:[''],
      residencia:[''],
      codigoExpedienteClinico:['']
    });
  }

  onSubmit() {
    const formValues = this.formularioRegistroPaciente.value;
    const formData = new FormData();
    for (const key in formValues) {
      if (formValues.hasOwnProperty(key)) {
        formData.append(key, formValues[key]);
      }
    }
    if (this.imagenSeleccionada) {
      formData.append('image', this.imagenSeleccionada, this.imagenSeleccionada.name);
    }
    Swal.fire({
      title: 'Estas seguro de realizar la accion',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      heightAuto:false,
      
      scrollbarPadding:true,
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.pacientesService.registrarPaciente(formData).subscribe((data:any)=>{
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
