import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor() { }

  confirmarAccion(texto: string): Promise<boolean> {
    return Swal.fire({
      text: texto,
      showDenyButton: true,
      confirmButtonText: 'Sí',
      confirmButtonColor: '#28afb0',
      denyButtonColor: '#0a4a6e',
      denyButtonText: `Cancelar`,
      heightAuto: false,
      scrollbarPadding: true
    }).then(result => result.isConfirmed);
  }
  mensajeConfirmacion(texto:string="Se realizo la accion correctamente"):Promise<boolean>{
    return Swal.fire({
      icon: 'success',
      text:texto,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#28afb0',
      heightAuto:false,
      scrollbarPadding:true,
    }).then(result=> result.isConfirmed);
  }
  mensajeError(texto:string="Error al realizar la accion"):Promise<boolean>{
    return Swal.fire({
      icon: 'error',
      text:texto,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#28afb0',
      heightAuto:false,
      scrollbarPadding:true,
    }).then(result=>result.isConfirmed);
  }
}
