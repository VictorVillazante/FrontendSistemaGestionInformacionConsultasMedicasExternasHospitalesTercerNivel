import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor() { }

  static agregarImagenesAFormData(formData: FormData, imagenes: string[]) :FormData{
    for (let i = 0; i < imagenes.length; i++) {
      if(imagenes[i].length>0){
        if(imagenes[i].includes('https://') || imagenes[i].includes('http://')){
          formData.append(`imagen${i+1}`, imagenes[i]);
        }else{
          formData.append(`imagen${i+1}`, this.convertirImagenBase64aBlob(imagenes[i], 'image/jpeg'));
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
