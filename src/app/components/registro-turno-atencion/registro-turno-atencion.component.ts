import { Component } from '@angular/core';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-turno-atencion',
  templateUrl: './registro-turno-atencion.component.html',
  styleUrls: ['./registro-turno-atencion.component.css']
})
export class RegistroTurnoAtencionComponent {
  medicos: any[] = [];
  turnos: any[] = [];
  consultorios: any[] = [];
  filteredSuggestionsMedicos: any[] = [];
  filteredSuggestionsTurnos: any[] = [];
  filteredSuggestionsConsultorioEspecialidad: any[] = [];
  formularioTurnoAtencionMedica: FormGroup<any>;

  constructor(private fb: FormBuilder, private informacionCentroMedicoService: InformacionCentroMedicoService) {
    this.formularioTurnoAtencionMedica = this.fb.group({
      idConsultorio: [''],
      idMedico: [''],
      idTurno: [''],
      numeroFichasDisponible: [''],
      fecha: ['']
    });
  }
  ngOnInit() {
    this.obtenerConsultorios();
    this.obtenerMedicos();
    this.obtenerTurnos();
  }
  obtenerMedicos() {
    this.informacionCentroMedicoService.obtenerMedicos().subscribe((data) => {
      this.medicos = data;
    });
  }
  obtenerTurnos() {
    this.informacionCentroMedicoService.obtenerTurnos().subscribe((data) => {
      this.turnos = data;
    });
  }
  obtenerConsultorios() {
    this.informacionCentroMedicoService.obtenerConsultorios().subscribe((data) => {
      this.consultorios = data;
    });
  }


  isAutocompleteTurnoFocused:boolean=false;;
  filterSuggestionsTurno(event: Event) {
    const inputText = (event.target as HTMLInputElement)?.value ?? '';
    if (inputText) {
      this.filteredSuggestionsTurnos = this.turnos.filter(turno =>
        turno.nombre.toLowerCase().includes(inputText.toLowerCase())
      );
    } else {
      this.filteredSuggestionsTurnos = [];
    }
  }
  onBlurTurno() {
    setTimeout(() => {
      this.isAutocompleteTurnoFocused = false;
    }, 500);
  }
  onFocusTurno() {
    this.isAutocompleteTurnoFocused = true;
  }

  isAutocompleteMedicoFocused:boolean=false;;
  filterSuggestionsMedico(event: Event) {
    const inputText = (event.target as HTMLInputElement)?.value ?? '';
    if (inputText) {
      this.filteredSuggestionsMedicos = this.medicos.filter(medico =>
        (medico.nombres+" "+medico.apellidoPaterno+" "+medico.apellidoMaterno).toLowerCase().includes(inputText.toLowerCase())
      );
    } else {
      this.filteredSuggestionsMedicos = [];
    }
  }
  onBlurMedico() {
    setTimeout(() => {
      this.isAutocompleteMedicoFocused = false;
    }, 500);
  }
  onFocusMedico() {
    this.isAutocompleteMedicoFocused = true;
  }

  isAutocompleteConsultorioEspecialidadFocused:boolean=false;;
  filterSuggestionsConsultorioEspecialidad(event: Event) {
    const inputText = (event.target as HTMLInputElement)?.value ?? '';
    if (inputText) {
      this.filteredSuggestionsConsultorioEspecialidad = this.consultorios.filter(consultorio =>
        consultorio[1].toLowerCase().includes(inputText.toLowerCase())
      );
    } else {
      this.filteredSuggestionsMedicos = [];
    }
  }
  onBlurConsultorioEspecialidad() {
    setTimeout(() => {
      this.isAutocompleteConsultorioEspecialidadFocused = false;
    }, 500);
  }
  onFocusConsultorioEspecialidad() {
    this.isAutocompleteConsultorioEspecialidadFocused = true;
  }
  onSubmit() {
    this.informacionCentroMedicoService.registrarTurnoAtencion(this.formularioTurnoAtencionMedica).subscribe(()=>{
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
  seleccionarConsultorioEspecialidad(consultorio: any) {
    this.isAutocompleteConsultorioEspecialidadFocused = false;
    this.formularioTurnoAtencionMedica.controls['idConsultorio'].setValue(consultorio[0]);
  }
  seleccionarMedico(medico: any) {
    this.isAutocompleteMedicoFocused = false;
    this.formularioTurnoAtencionMedica.controls['idMedico'].setValue(medico.idMedico);
  }
  seleccionarTurno(turno: any) {
    this.isAutocompleteTurnoFocused = false;
    this.formularioTurnoAtencionMedica.controls['idTurno'].setValue(turno.idTurno);
  }
}
