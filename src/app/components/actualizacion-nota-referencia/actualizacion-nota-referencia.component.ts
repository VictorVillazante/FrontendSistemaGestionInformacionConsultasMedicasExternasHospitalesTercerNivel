import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HistoriasClinicasService } from 'src/app/services/historias-clinicas.service';
import { NotasReferenciaService } from 'src/app/services/notas-referencia.service';
import { PacientesService } from 'src/app/services/pacientes.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizacion-nota-referencia',
  templateUrl: './actualizacion-nota-referencia.component.html',
  styleUrls: ['./actualizacion-nota-referencia.component.css']
})
export class ActualizacionNotaReferenciaComponent {
  formularioNotaReferencia: FormGroup;
  pacientes:any[]=[];
  filteredSuggestionsPacientes:any[]=[];
  historiasClinicas:any[]=[];
  filteredSuggestionsHistoriasClinicas:any[]=[];
  isAutocompletePacienteFocused:boolean=false;
  id:any;
  constructor(private activatedRoute:ActivatedRoute,private pacientesService:PacientesService,private fb: FormBuilder,private historiasClinicasService:HistoriasClinicasService,private notasReferenciaService:NotasReferenciaService) { 
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
      this.historiasClinicasService.obtenerHistoriasClinicas().subscribe((data)=>{
        this.historiasClinicas=data;
        this.activatedRoute.params.subscribe( params => {
          this.id = params['id'];
          this.obtenerDetalleNotaReferencia(this.id);
        });
      })
    });
  }

  obtenerDetalleNotaReferencia(id:any){
    this.notasReferenciaService.obtenerNotaReferencia(id).subscribe((data)=>{
      this.formularioNotaReferencia.patchValue({
        datosClinicos:data.datosClinicos,
        datosIngreso:data.datosIngreso,
        datosEgreso:data.datosEgreso,
        condicionesPacienteMomentoTransferencia:data.condicionesPacienteMomentoTransferencia,
        informeProcedimientosRealizados:data.informeProcedimientosRealizados,
        tratamientoEfectuado:data.tratamientoEfectuado,
        tratamientoPersistePaciente:data.tratamientoPersistePaciente,
        fechaVencimiento:data.fechaVencimiento,
        advertenciasFactoresRiesgo:data.advertenciasFactoresRiesgo,
        comentarioAdicional:data.comentarioAdicional,
        monitoreo:data.monitoreo,
        informeTrabajoSocial:data.informeTrabajoSocial,
        idPaciente:data.idPaciente,
        ciPaciente:data.ciPaciente,
        idHistoriaClinica:data.idHistoriaClinica,
        diagnosticoPresuntivo:data.diagnosticoPresuntivo
        
      });
    });
  }
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
    console.log(this.formularioNotaReferencia);
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
        this.notasReferenciaService.registrarNotaReferencia(this.formularioNotaReferencia).subscribe((data:any)=>{
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
