import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-paciente',
  templateUrl: './menu-paciente.component.html',
  styleUrls: ['./menu-paciente.component.css']
})
export class MenuPacienteComponent {
  cards = [
    {
      title: 'Gestión de Fichas Médicas',
      description: 'Administra tus fichas médicas de manera eficiente y segura.',
      image: 'url("https://images.unsplash.com/photo-1580281657521-7805f5a4e552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")'
    },
    {
      title: 'Ver Mis Historias Clínicas',
      description: 'Consulta tus historias clínicas de manera fácil y rápida.',
      image: 'url("https://images.unsplash.com/photo-1580281656224-5f45b0172d34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")'
    }
  ];
}
