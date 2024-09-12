import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-imagenes',
  templateUrl: './input-imagenes.component.html',
  styleUrls: ['./input-imagenes.component.css']
})
export class InputImagenesComponent {
  @Input() imagenes!: string[];
  @Output() imagenesEvent = new EventEmitter<any>();

  emitEventCambiarImagenes(imagenes:any):void{
    this.imagenesEvent.emit(imagenes);
  }
  agregarImagen(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          const result = e.target?.result;
          if (typeof result === 'string') {
            this.imagenes.push(result);
            this.emitEventCambiarImagenes(this.imagenes);
          }
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  }

  eliminarImagen(index: number): void {
    this.imagenes.splice(index, 1);
  }
}