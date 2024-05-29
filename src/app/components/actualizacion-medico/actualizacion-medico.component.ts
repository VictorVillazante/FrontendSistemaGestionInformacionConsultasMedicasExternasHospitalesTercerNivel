import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MedicosService } from 'src/app/services/medicos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizacion-medico',
  templateUrl: './actualizacion-medico.component.html',
  styleUrls: ['./actualizacion-medico.component.css']
})
export class ActualizacionMedicoComponent {
  id:any;
  formularioMedico: FormGroup;
  imagenSeleccionada: File | null = null; 
  constructor(private activatedRoute: ActivatedRoute,private medicosService:MedicosService,private fb: FormBuilder) { 
    this.formularioMedico = this.fb.group({
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
  ngOnInit(){
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this.obtenerDatosMedico(this.id);
    });
  }
  obtenerDatosMedico(idMedico:any){
    this.medicosService.obtenerMedico(idMedico).subscribe((data:any)=>{
      this.formularioMedico.patchValue({
        nombres:data.nombres,
        apellidoPaterno:data.apellidoPaterno,
        apellidoMaterno:data.apellidoMaterno,
        ci:data.ci,
        direccion:data.direccion,
        celular:data.celular,
        email:data.email,
        anosExperiencia:data.anosExperiencia,
        salario:data.salario,
        foto:data.foto,
        grupoSanguineo:data.grupoSanguineo
      });
    });
  }
  onSubmit() {
    const formValues = this.formularioMedico.value;
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
        this.medicosService.actualizarMedico(formData,this.id).subscribe((data:any)=>{
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
