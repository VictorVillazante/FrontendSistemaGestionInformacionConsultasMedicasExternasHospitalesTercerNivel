import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-historia-clinica',
  templateUrl: './detalle-historia-clinica.component.html',
  styleUrls: ['./detalle-historia-clinica.component.css']
})
export class DetalleHistoriaClinicaComponent {
  id:any;
  clinicalHistoryForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,private fb: FormBuilder) { 
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
      nombrePaciente: ['']
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
    });
  }

  onSubmit() {
    console.log('Formulario Enviado', this.clinicalHistoryForm.value);
    alert('Formulario Enviado: ' + JSON.stringify(this.clinicalHistoryForm.value, null, 2));
  }
}
