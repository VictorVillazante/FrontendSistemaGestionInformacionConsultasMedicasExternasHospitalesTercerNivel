import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HistoriasClinicasService } from 'src/app/services/historias-clinicas.service';
import { PacientesService } from 'src/app/services/pacientes.service';
import { RecetasService } from 'src/app/services/recetas.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizacion-receta',
  templateUrl: './actualizacion-receta.component.html',
  styleUrls: ['./actualizacion-receta.component.css']
})
export class ActualizacionRecetaComponent {
  id:any;
  formularioReceta: FormGroup;
  pacientes:any[]=[];
  filteredSuggestionsPacientes:any[]=[];
  historiasClinicas:any[]=[];
  filteredSuggestionsHistoriasClinicas:any[]=[];

  constructor(private activatedRoute:ActivatedRoute,private pacientesService:PacientesService,private fb: FormBuilder,private historiasClinicasService:HistoriasClinicasService,private recetasService:RecetasService) { 
    this.formularioReceta = this.fb.group({
      nombreGenericoMedicamentoPreescrito: [''],
      viaCuidadoEspecialesAdministracion: [''],
      concentracionDosificacion: [''],
      frecuenciaAdministracion24hrs: [''],
      duracionTratamiento: [''],
      fechaVencimiento: [''],
      precaucionesEspeciales: [''],
      indicacionesEspeciales: [''],
      idPaciente:[''],
      ciPaciente:[''],
      idHistoriaClinica:[''],
      diagnosticoPresuntivo:['']
    });
  }
  ngOnInit(){
    this.pacientesService.obtenerPacientes().subscribe((data)=>{
      this.pacientes=data;
      this.activatedRoute.params.subscribe( params => {
        this.id = params['id'];
        this.obtenerDetalleReceta(this.id);
      });
    });
  }
  obtenerDetalleReceta(id: any) {
    this.recetasService.obtenerReceta(id).subscribe((data)=>{
      this.formularioReceta.patchValue({
        nombreGenericoMedicamentoPreescrito: data.nombreGenericoMedicamentoPreescrito,
        viaCuidadoEspecialesAdministracion: data.viaCuidadoEspecialesAdministracion,
        concentracionDosificacion: data.concentracionDosificacion,
        frecuenciaAdministracion24hrs: data.frecuenciaAdministracion24hrs,
        duracionTratamiento: data.duracionTratamiento,
        fechaVencimiento: data.fechaVencimiento,
        precaucionesEspeciales: data.precaucionesEspeciales,
        indicacionesEspeciales: data.indicacionesEspeciales,
        idPaciente: data.idPaciente,
        ciPaciente: data.ciPropietario,
        idHistoriaClinica: data.idHistoriaClinica,
        diagnosticoPresuntivo: data.diagnosticoPresuntivo
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
    console.log(this.formularioReceta);
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
        this.recetasService.actualizarReceta(this.formularioReceta,this.id).subscribe((data:any)=>{
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
    this.formularioReceta.controls['idPaciente'].setValue(paciente.idUsuario);
    this.formularioReceta.controls['ciPaciente'].setValue(paciente.ci);
  }
  seleccionarHistoriaClinica(historiaClinica: any) {
    this.isAutocompletePacienteFocused = false;
    this.formularioReceta.controls['idHistoriaClinica'].setValue(historiaClinica.id);
    this.formularioReceta.controls['diagnosticoPresuntivo'].setValue(historiaClinica.diagnosticoPresuntivo);
  }
  obtenerHistoriasClinicasPaciente(idPaciente: any) {
    this.historiasClinicasService.obtenerHistoriasClinicasDePaciente(idPaciente).subscribe((data)=>{
      this.historiasClinicas=data;
    });
  }
}
