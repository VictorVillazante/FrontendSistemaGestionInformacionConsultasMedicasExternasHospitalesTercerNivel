import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-fichas-medicas',
  templateUrl: './gestion-fichas-medicas.component.html',
  styleUrls: ['./gestion-fichas-medicas.component.css']
})
export class GestionFichasMedicasComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  editItem(item: string) {
    console.log('Editar', item);
  }

  deleteItem(item: string) {
    console.log('Eliminar', item);
  }
}
