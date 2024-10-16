import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoriasClinicasService } from 'src/app/services/historias-clinicas.service';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-input-historia-clinica-formulario-documentos-expediente',
  templateUrl: './input-historia-clinica-formulario-documentos-expediente.component.html',
  styleUrls: ['./input-historia-clinica-formulario-documentos-expediente.component.css']
})
export class InputHistoriaClinicaFormularioDocumentosExpedienteComponent {
  constructor(private activatedRoute:ActivatedRoute,private pacientesService:PacientesService,private historiasClinicasService:HistoriasClinicasService) { }
  pacientes:any[]=[];
  historiasClinicas:any[]=[];
  filteredSuggestionsPacientes:any[]=[];
  filteredSuggestionsHistoriasClinicas:any[]=[];

  ngOnInit(){
    this.pacientesService.obtenerPacientes().subscribe((data)=>{
      this.pacientes=data;
      this.historiasClinicasService.obtenerHistoriasClinicas().subscribe((data)=>{
        this.historiasClinicas=data;
      })
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
  @Input() idPaciente!: any;
  @Input() ciPaciente!: string;
  seleccionarPaciente(paciente: any) {
    this.isAutocompletePacienteFocused = false;
    this.idPaciente=(paciente.idUsuario);
    this.ciPaciente=(paciente.ci);
  }
  @Input() idHistoriaClinica!: number;
  @Input() diagnosticoPresuntivo!: any;
  @Output() idHistoriaClinicaEvent = new EventEmitter<number>();
  seleccionarHistoriaClinica(historiaClinica: any) {
    this.isAutocompletePacienteFocused = false;
    this.idHistoriaClinica=(historiaClinica.id);
    this.emitEventCambiarHistoriaClinica(this.idHistoriaClinica);
    this.diagnosticoPresuntivo=(historiaClinica.diagnosticoPresuntivo);
  }
  obtenerHistoriasClinicasPaciente(idPaciente: any) {
    this.historiasClinicasService.obtenerHistoriasClinicasDePaciente(idPaciente).subscribe((data)=>{
      this.historiasClinicas=data;
    });
  }
  emitEventCambiarHistoriaClinica(idHistoriaClinica:any):void{
    this.idHistoriaClinicaEvent.emit(idHistoriaClinica);
  }
}
