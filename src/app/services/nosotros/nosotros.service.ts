import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {
  private nosotrosItems: { area: string, image: string }[] = [
    { area: 'Equipo', image: '/assets/nosotros.jpg' },
    { area: 'Almacén', image: '/assets/bodega.jpg' },
    { area: 'Tienda', image: '/assets/entrada.jpg' },
    { area: 'Empresa', image: '/assets/empresa.jpg' },
  ]

  constructor() { }

  getNosotrosItems() {
    return this.nosotrosItems;
  }
}
