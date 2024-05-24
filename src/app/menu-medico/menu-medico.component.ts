import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-medico',
  templateUrl: './menu-medico.component.html',
  styleUrls: ['./menu-medico.component.css']
})
export class MenuMedicoComponent {
  cards = [
    {
      title: 'Gestión de Historias Clinicas',
      description: 'Administra historias clinicas de manera eficiente y segura.',
      image: 'url("https://images.unsplash.com/photo-1580281657521-7805f5a4e552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/medico/gestion-historias-clinicas"
    },

  ];
}
