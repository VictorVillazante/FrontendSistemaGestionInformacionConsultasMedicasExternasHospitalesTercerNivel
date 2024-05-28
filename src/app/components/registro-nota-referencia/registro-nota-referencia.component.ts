import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { NotasReferenciaService } from '../../services/notas-referencia.service';
import { PacientesService } from 'src/app/services/pacientes.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HistoriasClinicasService } from 'src/app/services/historias-clinicas.service';

@Component({
  selector: 'app-registro-nota-referencia',
  templateUrl: './registro-nota-referencia.component.html',
  styleUrls: ['./registro-nota-referencia.component.css']
})
export class RegistroNotaReferenciaComponent {


  formularioNotaReferencia: FormGroup;
  pacientes:any[]=[];
  filteredSuggestionsPacientes:any[]=[];
  historiasClinicas:any[]=[];
  filteredSuggestionsHistoriasClinicas:any[]=[];
  constructor(private pacientesService:PacientesService,private fb: FormBuilder,private historiasClinicasService:HistoriasClinicasService,private notasReferenciaService:NotasReferenciaService) { 
    this.formularioNotaReferencia = this.fb.group({
      datosClinicos:[''],
      datosIngreso:[''],
      datosEgreso:[''],
      condicionesPacienteMomentoTransferencia:[''],
      informeProcedimientosRealizados:[''],
      tratamientoEfectuado:[''],
      tratamientoPersistePaciente:[''],
      fechaVencimiento:[''],
      advertenciasFactoresRiesgo:[''],
      comentarioAdicional:[''],
      monitoreo:[''],
      informeTrabajoSocial:[''],
      idPaciente:[''],
      ciPaciente:[''],
      idHistoriaClinica:[''],
      diagnosticoPresuntivo:['']
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
  
  isAutocompleteHistoriaClinicaFocused:boolean=false;
  onFocusHistoriaClinica() {
    this.isAutocompleteHistoriaClinicaFocused = true;
  }

  onBlurHistoriaClinica() {
    setTimeout(() => {
      this.isAutocompleteHistoriaClinicaFocused = false;
    }, 500);
  }

  filterSuggestionsHistoriaClinica(event: Event): void {
    const inputText = (event.target as HTMLInputElement)?.value ?? '';
    if (inputText) {
      this.filteredSuggestionsHistoriasClinicas = this.historiasClinicas.filter(historiaClinica =>
        historiaClinica.diagnosticoPresuntivo.toLowerCase().includes(inputText.toLowerCase())
      );
    } else {
      this.filteredSuggestionsHistoriasClinicas = [];
    }
  }


  onSubmit() {
    let notaReferencia=this.formularioNotaReferencia.value;
    console.log(notaReferencia);
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
        this.notasReferenciaService.registrarNotaReferencia(notaReferencia).subscribe((data:any)=>{
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
    this.formularioNotaReferencia.controls['idPaciente'].setValue(paciente.idPaciente);
    this.formularioNotaReferencia.controls['ciPaciente'].setValue(paciente.ci);
    this.obtenerHistoriasClinicasPaciente(paciente.idPaciente);
  }
  seleccionarHistoriaClinica(historiaClinica: any) {
    this.isAutocompletePacienteFocused = false;
    this.formularioNotaReferencia.controls['idHistoriaClinica'].setValue(historiaClinica.idHistoriaClinica);
    this.formularioNotaReferencia.controls['diagnosticoPresuntivo'].setValue(historiaClinica.diagnosticoPresuntivo);
  }
  obtenerHistoriasClinicasPaciente(idPaciente: any) {
    this.historiasClinicasService.obtenerHistoriasClinicasDePaciente(idPaciente).subscribe((data)=>{
      this.historiasClinicas=data;
    });
  }
}
