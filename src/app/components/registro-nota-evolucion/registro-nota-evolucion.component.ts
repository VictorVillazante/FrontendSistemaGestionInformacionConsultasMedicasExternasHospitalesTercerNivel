import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HistoriasClinicasService } from 'src/app/services/historias-clinicas.service';
import { PacientesService } from 'src/app/services/pacientes.service';
import { RecetasService } from '../../services/recetas.service';
import Swal from 'sweetalert2';
import { NotasReferenciaService } from '../../services/notas-referencia.service';
import { NotaEvolucionService } from '../../services/nota-evolucion.service';

@Component({
  selector: 'app-registro-nota-evolucion',
  templateUrl: './registro-nota-evolucion.component.html',
  styleUrls: ['./registro-nota-evolucion.component.css']
})
export class RegistroNotaEvolucionComponent {
  formularioNotaEvolucion: FormGroup;
  pacientes:any[]=[];
  filteredSuggestionsPacientes:any[]=[];
  historiasClinicas:any[]=[];
  filteredSuggestionsHistoriasClinicas:any[]=[];
  constructor(private pacientesService:PacientesService,private fb: FormBuilder,private historiasClinicasService:HistoriasClinicasService,private notaEvolucionService:NotaEvolucionService) { 
    this.formularioNotaEvolucion = this.fb.group({
      cambiosPacienteResultadosTratamiento:[''],
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
    let notaEvolucion=this.formularioNotaEvolucion.value;
    console.log(notaEvolucion);
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
        this.notaEvolucionService.registrarNotaEvolucion(notaEvolucion).subscribe((data:any)=>{
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
    this.formularioNotaEvolucion.controls['idPaciente'].setValue(paciente.idPaciente);
    this.formularioNotaEvolucion.controls['ciPaciente'].setValue(paciente.ci);
    this.obtenerHistoriasClinicasPaciente(paciente.idPaciente);
  }
  seleccionarHistoriaClinica(historiaClinica: any) {
    this.isAutocompletePacienteFocused = false;
    this.formularioNotaEvolucion.controls['idHistoriaClinica'].setValue(historiaClinica.idHistoriaClinica);
    this.formularioNotaEvolucion.controls['diagnosticoPresuntivo'].setValue(historiaClinica.diagnosticoPresuntivo);
  }
  obtenerHistoriasClinicasPaciente(idPaciente: any) {
    this.historiasClinicasService.obtenerHistoriasClinicasDePaciente(idPaciente).subscribe((data)=>{
      this.historiasClinicas=data;
    });
  }
}
