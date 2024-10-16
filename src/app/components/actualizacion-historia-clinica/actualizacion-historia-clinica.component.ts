import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HistoriasClinicasService } from 'src/app/services/historias-clinicas.service';
import Swal from 'sweetalert2';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';


@Component({
  selector: 'app-actualizacion-historia-clinica',
  templateUrl: './actualizacion-historia-clinica.component.html',
  styleUrls: ['./actualizacion-historia-clinica.component.css']
})
export class ActualizacionHistoriaClinicaComponent {
  id:any;
  clinicalHistoryForm: FormGroup;
  constructor(private informacionCentroMedicoService:InformacionCentroMedicoService,private activatedRoute: ActivatedRoute,private fb: FormBuilder,private historiasClinicasService:HistoriasClinicasService) { 
    this.clinicalHistoryForm = this.fb.group({
      idHistoriaClinica: [''],
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
      idEspecialidad:[''],
      nombreEspecialidad:[''],
      idPaciente:['']
    });
  }
  especialidades:any[]=[];

  obtenerEspecialidades() {
    this.informacionCentroMedicoService.obtenerEspecialidades().subscribe((data)=>{
      this.especialidades=data;
    })
  }
  ngOnInit(): void {
    this.obtenerEspecialidades();
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this.obtenerDetalleHistoriaClinica(this.id);
    });
  }
  obtenerDetalleHistoriaClinica(idHistoriaClinica:any){
    this.historiasClinicasService.obtenerHistoriaClinicas(idHistoriaClinica).subscribe((data:any)=>{
      this.clinicalHistoryForm.setValue({
        idHistoriaClinica: data.id,
        amnesis: data.amnesis,
        antecedentesFamiliares: data.antecedentesFamiliares,
        antecedentesGinecoobstetricos: data.antecedentesGinecoobstetricos,
        antecedentesNoPatologicos: data.antecedentesNoPatologicos,
        antecedentesPatologicos: data.antecedentesPatologicos,
        antecedentesPersonales: data.antecedentesPersonales,
        diagnosticoPresuntivo: data.diagnosticoPresuntivo,
        diagnosticosDiferenciales: data.diagnosticosDiferenciales,
        examenFisico: data.examenFisico,
        examenFisicoEspecial: data.examenFisicoEspecial,
        propuestaBasicaDeConducta: data.propuestaBasicaDeConducta,
        tratamiento: data.tratamiento,
        idEspecialidad:data.idEspecialidad,
        nombreEspecialidad:data.nombreEspecialidad,
        idPaciente:data.idPaciente
      });
    });
  }
  onSubmit() {
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
        this.historiasClinicasService.actualizarHistoriaClinica(this.id,this.clinicalHistoryForm).subscribe((data:any)=>{
          console.log(data);
        });
      }
    });
   
  }
  isAutocompleteEspecialidadFocused:boolean=false;
  filteredSuggestionsEspecialidades:any[]=[];

  onFocusEspecialidad() {
    this.isAutocompleteEspecialidadFocused = true;
  }

  onBlurEspecialidad() {
    setTimeout(() => {
      this.isAutocompleteEspecialidadFocused = false;
    }, 500);
  }
  filterSuggestionsEspecialidad(event: Event): void {
    const inputText = (event.target as HTMLInputElement)?.value ?? '';
    if (inputText) {
      this.filteredSuggestionsEspecialidades = this.especialidades.filter(especilidad =>
        especilidad.nombre.toLowerCase().includes(inputText.toLowerCase())
      );
    } else {
      this.filteredSuggestionsEspecialidades = [];
    }
  }
  seleccionarEspecialidad(especialidad: any) {
    this.isAutocompleteEspecialidadFocused = false;
    this.clinicalHistoryForm.controls['idEspecialidad'].setValue(especialidad.idEspecialidad);
    this.clinicalHistoryForm.controls['nombreEspecialidad'].setValue(especialidad.nombre);
  }
}
