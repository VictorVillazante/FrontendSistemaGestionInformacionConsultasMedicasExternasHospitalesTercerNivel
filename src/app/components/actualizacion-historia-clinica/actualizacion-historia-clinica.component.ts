import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HistoriasClinicasService } from 'src/app/services/historias-clinicas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-actualizacion-historia-clinica',
  templateUrl: './actualizacion-historia-clinica.component.html',
  styleUrls: ['./actualizacion-historia-clinica.component.css']
})
export class ActualizacionHistoriaClinicaComponent {
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
        idHistoriaClinica: data.idHistoriaClinica,
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
  onSubmit() {
    let historiaClinica=this.clinicalHistoryForm.value;
    console.log(historiaClinica);
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
        this.historiasClinicasService.actualizarHistoriaClinica(this.id,historiaClinica).subscribe((data:any)=>{
          console.log(data);
        });
      }
    });
   
  }
}
