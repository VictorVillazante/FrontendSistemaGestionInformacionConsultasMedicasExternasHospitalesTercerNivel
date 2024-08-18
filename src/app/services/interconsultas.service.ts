import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterconsultasService {
  obtenerInterconsultas() {
    return of([]);
  }

  constructor(private http:HttpClient) { }
}
