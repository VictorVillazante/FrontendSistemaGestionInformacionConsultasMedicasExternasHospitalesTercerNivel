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

  pacienteSeleccionado: any = { ci: '' };
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
  ngOnInit(): void {
    this.obtenerPacientes();
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
    let historiaClinica=this.clinicalHistoryForm.value;
    console.log(historiaClinica);
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
        this.historiasClinicasService.registrarHistoriaClinica(historiaClinica).subscribe((data:any)=>{
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


  obtenerPacientes(){
    this.pacientesService.obtenerPacientes().subscribe((data)=>{
      this.pacientes=data;
    });
  }
  seleccionarPaciente(paciente: any) {
    this.isAutocompletePacienteFocused = false;
    this.clinicalHistoryForm.controls['idPaciente'].setValue(paciente.idPaciente);
    this.clinicalHistoryForm.controls['ciPaciente'].setValue(paciente.ci);

  }
}
