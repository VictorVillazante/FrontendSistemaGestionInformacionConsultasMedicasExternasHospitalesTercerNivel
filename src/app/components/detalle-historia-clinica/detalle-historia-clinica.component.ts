import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HistoriasClinicasService } from '../../services/historias-clinicas.service';

@Component({
  selector: 'app-detalle-historia-clinica',
  templateUrl: './detalle-historia-clinica.component.html',
  styleUrls: ['./detalle-historia-clinica.component.css']
})
export class DetalleHistoriaClinicaComponent {
  id:any;
  clinicalHistoryForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,private fb: FormBuilder,private historiasClinicasService:HistoriasClinicasService) { 
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
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this.obtenerDetalleHistoriaClinica(this.id);
    });
  }
  obtenerDetalleHistoriaClinica(idHistoriaClinica:any){
    this.historiasClinicasService.obtenerHistoriaClinicas(idHistoriaClinica).subscribe((data:any)=>{
      this.clinicalHistoryForm.patchValue({
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
        tratamiento: data.tratamiento
      });
    });
  }
}
