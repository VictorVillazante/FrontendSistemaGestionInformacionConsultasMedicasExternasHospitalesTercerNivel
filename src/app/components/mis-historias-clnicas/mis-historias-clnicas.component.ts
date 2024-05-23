import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-historias-clnicas',
  templateUrl: './mis-historias-clnicas.component.html',
  styleUrls: ['./mis-historias-clnicas.component.css']
})
export class MisHistoriasClnicasComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  viewDetails(id:any){
    
  }
}
