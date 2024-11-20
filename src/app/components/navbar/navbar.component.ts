import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar/navbar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  links: { enlace: string, icon: string, ref: string}[];
  activeLink: string;

  constructor(private navbarService: NavbarService) { 
    this.links = navbarService.getLinks();
    this.activeLink  = this.links[0].enlace
  }

  setActiveLink(link: string): void {
    this.activeLink = link;
  }
}

/*
  links = [
    { enlace: "Inicio", icon: "bi bi-house", ref: "#inicio" },
    { enlace: "Nosotros", icon: "bi bi-buildings-fill", ref: "#nosotros" },
    { enlace: "Servicios", icon: "bi bi-suitcase-lg-fill", ref: "#servicios" },
    { enlace: "Producto", icon: "bi bi-wrench-adjustable", ref: "#producto" },
    { enlace: "Marcas", icon: "bi bi-shield-fill", ref: "#marcas" },
    { enlace: "Contáctanos", icon: "bi bi-file-earmark-person", ref: "#contacto" }
  ];
*/