import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HistoriasClinicasService } from 'src/app/services/historias-clinicas.service';
import { PacientesService } from '../../services/pacientes.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro-historia-clinica',
  templateUrl: './registro-historia-clinica.component.html',
  styleUrls: ['./registro-historia-clinica.component.css']
})
export class RegistroHistoriaClinicaComponent {

  id:any;
  clinicalHistoryForm: FormGroup;
  pacientes:any[]=[];
  filteredSuggestionsPacientes:any[]=[];
  constructor(private pacientesService:PacientesService,private fb: FormBuilder,private historiasClinicasService:HistoriasClinicasService) { 
    this.clinicalHistoryForm = this.fb.group({
      amnesis: [''],
      antecedentesFamiliares: [''],
      antecedentesGinecoobstetricos: [''],
      antecedentesNoPatologicos: [''],
      antecedentesPatologicos: [''],
      antecedentesPersonales: [''],
      diagnosticoPresuntivo: [''],
      diagnosticosDiferenciales: [''],
      examenFisico: [''],
      examenFisicoEspecial: [''],
      propuestaBasicaDeConducta: [''],
      tratamiento: [''],
      idPaciente:[''],
      ciPaciente:['']
    });
  }
  ngOnInit(){
    this.pacientesService.obtenerPacientes().subscribe((data)=>{
      this.pacientes=data;
    });
  }
  isAutocompletePacienteFocused:boolean=false;
  onFocusPaciente() {
    this.isAutocompletePacienteFocused = true;
  }

  onBlurPaciente() {
    setTimeout(() => {
      this.isAutocompletePacienteFocused = false;
    }, 500);
  }

  filterSuggestionsPaciente(event: Event): void {
    const inputText = (event.target as HTMLInputElement)?.value ?? '';
    if (inputText) {
      this.filteredSuggestionsPacientes = this.pacientes.filter(paciente =>
        paciente.ci.toLowerCase().includes(inputText.toLowerCase())
      );
    } else {
      this.filteredSuggestionsPacientes = [];
    }
  }


  onSubmit() {
    //let historiaClinica=this.clinicalHistoryForm.value;
    console.log(this.clinicalHistoryForm);
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
        this.historiasClinicasService.registrarHistoriaClinica(this.clinicalHistoryForm).subscribe((data:any)=>{
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



  seleccionarPaciente(paciente: any) {
    this.isAutocompletePacienteFocused = false;
    this.clinicalHistoryForm.controls['idPaciente'].setValue(paciente.idPaciente);
    this.clinicalHistoryForm.controls['ciPaciente'].setValue(paciente.ci);

  }
}
