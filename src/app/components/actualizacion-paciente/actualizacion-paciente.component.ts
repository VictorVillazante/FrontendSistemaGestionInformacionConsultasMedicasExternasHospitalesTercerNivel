import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PacientesService } from 'src/app/services/pacientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizacion-paciente',
  templateUrl: './actualizacion-paciente.component.html',
  styleUrls: ['./actualizacion-paciente.component.css']
})
export class ActualizacionPacienteComponent {
  id:any;
  formularioPaciente: FormGroup;
  imagenSeleccionada: File | null = null; 
  constructor(private activatedRoute: ActivatedRoute,private pacientesService:PacientesService,private fb: FormBuilder) { 
    this.formularioPaciente = this.fb.group({
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
  ngOnInit(){
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this.obtenerPaciente(this.id);
    });
  }
  obtenerPaciente(idMedico:any){
    this.pacientesService.obtenerPaciente(idMedico).subscribe((data:any)=>{
      this.formularioPaciente.patchValue({
        idPaciente:data.idPaciente,
        apellidoPaterno:data.apellidoPaterno,
        apellidoMaterno:data.apellidoMaterno,
        nombres:data.nombres,
        fechaNacimiento:data.fechaNacimiento,
        sexo:data.sexo,
        procedencia:data.procedencia,
        fechaIngreso:data.fechaIngreso,
        idiomaHablado:data.idiomaHablado,
        autoprescedenciaCultural:data.autoprescedenciaCultural,
        ocupacion:data.ocupacion,
        apoyoDecisionAsistenciaMedica:data.apoyoDecisionAsistenciaMedica,
        estadoCivil:data.estadoCivil,
        escolaridad:data.escolaridad,
        grupoSanguineo:data.grupoSanguineo,
        ci:data.ci,
        email:data.email,
        celular:data.celular,
        diasSancion:data.diasSancion,
        edad:data.edad,
        residencia:data.residencia,
        codigoExpedienteClinico:data.codigoExpedienteClinico
      });
    });
  }
  onSubmit() {
    const formValues = this.formularioPaciente.value;
    const formData = new FormData();
    for (const key in formValues) {
      if (formValues.hasOwnProperty(key)) {
        formData.append(key, formValues[key]);
      }
    }
    if (this.imagenSeleccionada) {
      formData.append('image', this.imagenSeleccionada, this.imagenSeleccionada.name);
    }
    console.log(formData);
    console.log(formValues);
    Swal.fire({
      text:"Estas seguro de realizar la accion?",
      showDenyButton: true,
      confirmButtonText: 'Si',
      confirmButtonColor: '#28afb0',
      denyButtonColor: '#0a4a6e',
      denyButtonText: `Cancelar`,
      heightAuto:false,
      scrollbarPadding:true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.pacientesService.actualizarPaciente(formData,this.id).subscribe((data:any)=>{
          Swal.fire({
            text:"Estas seguro de realizar la accion?",
            showDenyButton: true,
            confirmButtonText: 'Si',
            confirmButtonColor: '#28afb0',
            denyButtonColor: '#0a4a6e',
            denyButtonText: `Cancelar`,
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
