import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotaEvolucionService {
  obtenerNotasEvolucion() {
    return of();
  }

  constructor() { }
}
