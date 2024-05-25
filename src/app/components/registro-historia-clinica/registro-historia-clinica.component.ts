import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HistoriasClinicasService } from 'src/app/services/historias-clinicas.service';

@Component({
  selector: 'app-registro-historia-clinica',
  templateUrl: './registro-historia-clinica.component.html',
  styleUrls: ['./registro-historia-clinica.component.css']
})
export class RegistroHistoriaClinicaComponent {

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
  }

  onSubmit() {
    let historiaClinica=this.clinicalHistoryForm.value;
    console.log(historiaClinica);
    this.historiasClinicasService.registrarHistoriaClinica(historiaClinica).subscribe((data:any)=>{
      console.log(data);
    });
  }
}
