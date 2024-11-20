import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private links = [
    { enlace: "Inicio", icon: "bi bi-house", ref: "#inicio" },
    { enlace: "Nosotros", icon: "bi bi-buildings-fill", ref: "#nosotros" },
    { enlace: "Servicios", icon: "bi bi-suitcase-lg-fill", ref: "#servicios" },
    { enlace: "Producto", icon: "bi bi-wrench-adjustable", ref: "#producto" },
    { enlace: "Marcas", icon: "bi bi-shield-fill", ref: "#marcas" },
    { enlace: "Contáctanos", icon: "bi bi-file-earmark-person", ref: "#contacto" },
  ];

  constructor() { }

  getLinks() {
    return this.links;
  }
}