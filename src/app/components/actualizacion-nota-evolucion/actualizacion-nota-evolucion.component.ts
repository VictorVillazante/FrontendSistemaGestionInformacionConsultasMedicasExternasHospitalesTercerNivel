import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HistoriasClinicasService } from 'src/app/services/historias-clinicas.service';
import { NotaEvolucionService } from 'src/app/services/nota-evolucion.service';
import { PacientesService } from 'src/app/services/pacientes.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizacion-nota-evolucion',
  templateUrl: './actualizacion-nota-evolucion.component.html',
  styleUrls: ['./actualizacion-nota-evolucion.component.css']
})
export class ActualizacionNotaEvolucionComponent {
  formularioNotaEvolucion: FormGroup;
  pacientes:any[]=[];
  filteredSuggestionsPacientes:any[]=[];
  historiasClinicas:any[]=[];
  filteredSuggestionsHistoriasClinicas:any[]=[];
  constructor(private activatedRoute:ActivatedRoute,private pacientesService:PacientesService,private fb: FormBuilder,private historiasClinicasService:HistoriasClinicasService,private notaEvolucionService:NotaEvolucionService) { 
    this.formularioNotaEvolucion = this.fb.group({
      cambiosPacienteResultadosTratamiento:[''],
      idPaciente:[''],
      ciPaciente:[''],
      idHistoriaClinica:[''],
      diagnosticoPresuntivo:['']
    });
  }
  id:any;
  ngOnInit(){
    this.pacientesService.obtenerPacientes().subscribe((data)=>{
      this.pacientes=data;
      this.historiasClinicasService.obtenerHistoriasClinicas().subscribe((data)=>{
        this.historiasClinicas=data;
        this.activatedRoute.params.subscribe( params => {
          this.id = params['id'];
          this.obtenerDetalleNotaEvolucion(this.id);
        });
      })
    });
  }
  obtenerDetalleNotaEvolucion(id:any){
    this.notaEvolucionService.obtenerNotaEvolucion(id).subscribe((data)=>{
      let diagnostivoPresentivoObtenido=this.historiasClinicas.filter(historiaClinica=>historiaClinica.idHistoriaClinica==data.idHistoriaClinica);
      this.formularioNotaEvolucion.patchValue({
        cambiosPacienteResultadosTratamiento:data.cambiosPacienteResultadosTratamiento,
        idPaciente:data.idPaciente,
        idHistoriaClinica:data.idHistoriaClinica,
        diagnosticoPresuntivo:diagnostivoPresentivoObtenido,
        ciPaciente:data.ciPaciente,
      });
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
    console.log(this.formularioNotaEvolucion);
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
        this.notaEvolucionService.actualizarNotaEvolucion(this.id,this.formularioNotaEvolucion).subscribe((data:any)=>{
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
  buscarCiEnPaciente(data: any): any {
    let pacienteBuscado=this.pacientes.filter((paciente)=>{paciente.idPaciente==data.idPaciente});
    return pacienteBuscado[0].ciPaciente;
  }
  
  buscarDiagnosticoEnHistoriasClinicas(data: any): any {
    let historiaClinicaBuscada=this.historiasClinicas.filter((historiaClinica)=>{historiaClinica.idHistoriaClinica==data.idHistoriaClinica});
    return historiaClinicaBuscada[0].diagnosticoPresuntivo;
  }
  
}

