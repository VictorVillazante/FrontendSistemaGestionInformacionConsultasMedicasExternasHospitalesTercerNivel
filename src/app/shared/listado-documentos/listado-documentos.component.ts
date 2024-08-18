import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HistoriasClinicasService } from '../../services/historias-clinicas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-documentos',
  templateUrl: './listado-documentos.component.html',
  styleUrls: ['./listado-documentos.component.css']
})
export class ListadoDocumentosComponent implements OnChanges{
  @Input() documentos:any[]=[];
  @Input() verDetalleDocumento!: (id:number) => void;
  @Input() actualizarDocumento!: (id:number) => void;
  constructor(private router:Router){}
  verDetalleHistoriaClinica(idHistoriaClinica: any) {
    const url = this.router.serializeUrl(
     this.router.createUrlTree(['/medico/modificar-historia-clinica', idHistoriaClinica])
   );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.documentos);
  }

}
