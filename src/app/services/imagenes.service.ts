import { Injectable } from '@angular/core';
import { Imagen } from '../models/Imagen';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor() { }

  static agregarImagenesAFormData(formData: FormData, imagenes: Imagen[]) :FormData{
    for (let i = 0; i < imagenes.length; i++) {
      if(imagenes[i] != null){
        if(imagenes[i].url.includes('https://') || imagenes[i].url.includes('http://')){
          formData.append(`imagen${i+1}`, JSON.stringify(imagenes[i]));
        }else{
          formData.append(`imagen${i+1}`, this.convertirImagenBase64aBlob(imagenes[i].url, 'image/jpeg'));
        }
      }
    }
    return formData;
  }
  static convertirImagenBase64aBlob(base64: string, tipoContenido: string): Blob {
    const byteCharacters = atob(base64.split(',')[1]);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: tipoContenido });
  }
}
