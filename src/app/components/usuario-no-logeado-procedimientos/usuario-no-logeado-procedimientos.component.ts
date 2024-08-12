import { Component } from '@angular/core';
import { PasoProcedimiento } from 'src/app/models/PasoProcedimiento';

@Component({
  selector: 'app-usuario-no-logeado-procedimientos',
  templateUrl: './usuario-no-logeado-procedimientos.component.html',
  styleUrls: ['./usuario-no-logeado-procedimientos.component.css']
})
export class UsuarioNoLogeadoProcedimientosComponent {
  listadoProcedimientoPasos:PasoProcedimiento[]=[
    {
      nombre:"Requisito 1",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, purus quis ultrices aliquet, magna ex sollicitudin tellus, sed tempus libero leo in quam. Vivamus bibendum sagittis arcu vitae euismod. Maecenas pulvinar justo libero, nec mattis nisl tempor eu. Integer elementum lectus enim, eget finibus enim commodo quis. Integer pellentesque mauris mauris, sed malesuada diam ullamcorper at. Morbi vitae nisi eget purus aliquet porta et id sapien. Vivamus cursus, augue ac commodo lacinia, enim ligula vulputate justo, vitae ultricies libero tellus ut urna. Curabitur ac ligula vel dolor laoreet tristique. Aliquam neque massa, blandit sit amet suscipit sed, iaculis nec turpis. Fusce volutpat elit odio, in gravida sapien porttitor at. Maecenas non iaculis dolor, at pharetra urna. Vestibulum cursus dictum justo at ullamcorper. Pellentesque venenatis, ligula nec rutrum luctus, leo elit placerat lacus, ut elementum augue ante sollicitudin mi. Nullam faucibus dolor sit amet ornare sodales. Nullam ultrices rhoncus enim eget cursus. Mauris sed posuere libero. Integer lobortis aliquam nulla congue pulvinar. Sed non dui urna. Duis finibus congue fermentum. Nulla sed arcu magna. Morbi at magna enim. Aenean tempus facilisis tincidunt. Aenean sit amet sapien ac lacus gravida condimentum. Praesent convallis lacinia erat, et viverra odio hendrerit ac.",
      imagen:"fondo-opciones-menu.jpg"
    },
    {
      nombre:"Requisito 1",
      descripcion:"Descripcion",
      imagen:"fondo-opciones-menu.jpg"
    },
    {
      nombre:"Requisito 1",
      descripcion:"Descripcion",
      imagen:"fondo-opciones-menu.jpg"
    }
  ];
}
