import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptsService {

  constructor() { }
  cargar(archivos:string[]){
    for(let archivo of archivos){
      let scriptId = `script-${archivo}`;
      if (!document.getElementById(scriptId)) {
        let script = document.createElement('script');
        script.src = `./assets/js/${archivo}.js`;
        script.id = scriptId;        
        script.onload = () => {
        };
        script.onerror = () => {
          console.error(`Error al cargar ${archivo}.js.`);
        };
        document.body.appendChild(script);
      }
    }
  }
  cargarCarousel(id:string){
    let scriptId = 'script-' + id;
    if (!document.getElementById(scriptId)) {
      console.log("cargando carousel con id "+scriptId);
      let script = document.createElement('script');
      script.src = `./assets/js/carousel.js`;
      script.id = scriptId;        
      script.onload = () => {
      };
      script.onerror = () => {
        console.error(`Error al cargar ${id}.js.`);
      };
      document.body.appendChild(script);
    }
  }
}
