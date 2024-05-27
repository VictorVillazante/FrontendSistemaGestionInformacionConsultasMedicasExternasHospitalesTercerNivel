import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  cards = [
    {
      title: 'Gestión de Fichas Médicas',
      description: 'Administra tus fichas médicas de manera eficiente y segura.',
      image: 'url("https://images.unsplash.com/photo-1580281657521-7805f5a4e552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/paciente/gestion-ficha-medica",
      rol:"PACIENTE"
    },
    {
      title: 'Ver Mis Historias Clínicas',
      description: 'Consulta tus historias clínicas de manera fácil y rápida.',
      image: 'url("https://images.unsplash.com/photo-1580281656224-5f45b0172d34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/paciente/ver-mis-historias-clinicas",
      rol:"PACIENTE"
    },
    {
      title: 'Gestión de Historias Clinicas',
      description: 'Administra historias clinicas de manera eficiente y segura.',
      image: 'url("https://images.unsplash.com/photo-1580281657521-7805f5a4e552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/medico/gestion-historias-clinicas",
      rol:"MEDICO"
    },
    {
      title: 'Gestión de pacientes',
      description: '',
      image: 'url("https://images.unsplash.com/photo-1580281657521-7805f5a4e552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/medico/gestion-historias-clinicas",
      rol:"ADMINISTRADOR"
    },
    {
      title: 'Gestión de Horarios de Atencion',
      description: 'Administra historias clinicas de manera eficiente y segura.',
      image: 'url("https://images.unsplash.com/photo-1580281657521-7805f5a4e552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/medico/gestion-historias-clinicas",
      rol:" ADMINISTRADOR"
    }
  ];
  roles:string[] = [];
  ngOnInit() {
    this.roles = JSON.parse(localStorage.getItem("credentials") ?? '{"roles":[]}').roles ?? [];
    console.log(this.roles);
    this.cards = this.cards.filter(card => this.roles.includes(card.rol));
    console.log(this.cards)
  }
}
