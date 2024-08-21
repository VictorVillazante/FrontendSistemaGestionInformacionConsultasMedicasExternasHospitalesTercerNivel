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
      title: 'Mis Historias Clínicas',
      description: 'Consulta tus historias clínicas de manera fácil y rápida.',
      image: 'url("https://images.unsplash.com/photo-1580281656224-5f45b0172d34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/paciente/ver-mis-historias-clinicas",
      rol:"PACIENTE"
    },
    {
      title: 'Mis Certificados Medicos',
      description: 'Consulta tus certificados medicos de manera fácil y rápida.',
      image: 'url("https://images.unsplash.com/photo-1580281656224-5f45b0172d34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/paciente/ver-mis-certificados-medicos",
      rol:"PACIENTE"
    },
    {
      title: 'Mis Examenes Complementarios',
      description: 'Consulta tus examenes complementarios de manera fácil y rápida.',
      image: 'url("https://images.unsplash.com/photo-1580281656224-5f45b0172d34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/paciente/ver-mis-examenes-complementarios",
      rol:"PACIENTE"
    },
    {
      title: 'Mis Interconsultas',
      description: 'Consulta tus interconsultas de manera fácil y rápida.',
      image: 'url("https://images.unsplash.com/photo-1580281656224-5f45b0172d34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/paciente/ver-mis-interconsultas",
      rol:"PACIENTE"
    },
    {
      title: 'Mis notas de referencia',
      description: 'Consulta tus notas de referencia de manera fácil y rápida.',
      image: 'url("https://images.unsplash.com/photo-1580281657521-7805f5a4e552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/paciente/ver-mis-notas-referencia",
      rol:"PACIENTE"
    },
    {
      title: 'Mis recetas',
      description: 'Consulta tus recetas de manera fácil y rápida.',
      image: 'url("https://images.unsplash.com/photo-1580281657521-7805f5a4e552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/paciente/ver-mis-recetas",
      rol:"PACIENTE"
    },
    {
      title: 'Mis notas de evolucion',
      description: 'Consulta tus notas de evolucion de manera fácil y rápida.',
      image: 'url("https://images.unsplash.com/photo-1580281657521-7805f5a4e552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/paciente/ver-mis-notas-evolucion",
      rol:"PACIENTE"
    },
    {
      title: 'Mis Papeletas de Internacion',
      description: 'Consulta tus papeletas de internacion de manera fácil y rápida.',
      image: 'url("https://images.unsplash.com/photo-1580281656224-5f45b0172d34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/paciente/ver-mis-papeletas-internacion",
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
      title: 'Gestión de Certificados Medicos',
      description: 'Administra certificados medicos de manera eficiente y segura.',
      image: 'url("https://images.unsplash.com/photo-1580281657521-7805f5a4e552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/medico/gestion-certificados-medicos",
      rol:"MEDICO"
    },
    {
      title: 'Gestión de Examenes Complementarios',
      description: 'Administra examenes complementarios de manera eficiente y segura.',
      image: 'url("https://images.unsplash.com/photo-1580281657521-7805f5a4e552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/medico/gestion-examenes-complementarios",
      rol:"MEDICO"
    },
    {
      title: 'Gestión de Solicitudes Interconsultas',
      description: 'Administra solicitudes interconsultas de manera eficiente y segura.',
      image: 'url("https://images.unsplash.com/photo-1580281657521-7805f5a4e552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/medico/gestion-interconsultas",
      rol:"MEDICO"
    },
    {
      title: 'Gestión de Notas de Referencia',
      description: 'Administra notas de referencia de manera eficiente y segura.',
      image: 'url("https://images.unsplash.com/photo-1580281657521-7805f5a4e552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/medico/gestion-notas-referencia",
      rol:"MEDICO"
    },
    {
      title: 'Gestión de Recetas',
      description: 'Administra recetas de manera eficiente y segura.',
      image: 'url("https://images.unsplash.com/photo-1580281657521-7805f5a4e552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/medico/gestion-recetas",
      rol:"MEDICO"
    },
    {
      title: 'Gestión de Notas de Evolucion',
      description: 'Administra notas de evolucion de manera eficiente y segura.',
      image: 'url("https://images.unsplash.com/photo-1580281657521-7805f5a4e552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/medico/gestion-notas-evolucion",
      rol:"MEDICO"
    },
    {
      title: 'Gestión de Papeletas de Internacion',
      description: 'Administra papeletas de internacion de manera eficiente y segura.',
      image: 'url("https://images.unsplash.com/photo-1580281657521-7805f5a4e552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/medico/gestion-papeletas-internacion",
      rol:"MEDICO"
    },
    {
      title: 'Gestión de Medicos',
      description: 'Administra informacion de medicos de manera eficiente y segura.',
      image: 'url("https://images.unsplash.com/photo-1580281657521-7805f5a4e552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/administrador/gestion-medicos",
      rol:"ADMINISTRADOR"
    },
    {
      title: 'Gestión de pacientes',
      description: '',
      image: 'url("https://images.unsplash.com/photo-1580281657521-7805f5a4e552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/administrador/gestion-pacientes",
      rol:"ADMINISTRADOR"
    },
    {
      title: 'Gestión de Turnos Atencion Medica',
      description: 'Administra informacion de turnos de atencion medica de manera eficiente y segura.',
      image: 'url("https://images.unsplash.com/photo-1580281657521-7805f5a4e552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG1lZGljYWwlMjByZWNvcmR8fDB8fHx8MTY4NzgzODc3Ng&ixlib=rb-1.2.1&q=80&w=400")',
      route:"/administrador/gestion-turnos-atencion",
      rol:"ADMINISTRADOR"
    },
    
  ];
  roles:string[] = [];
  ngOnInit() {
    this.roles = JSON.parse(localStorage.getItem("credentials") ?? '{"roles":["PACIENTE","MEDICO","ADMINISTRADOR"]}').roles ?? [];
    console.log(this.roles);
    this.cards = this.cards.filter(card => this.roles.includes(card.rol));
    console.log(this.cards)
  }
}
