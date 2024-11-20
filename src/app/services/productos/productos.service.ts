import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private listaCategorias = [
    'TODAS LAS CATEGORIAS',
    'DISCO, PLATO Y COLLARÍN DE EMBRAGUE',
    'PASTILLA Y ZAPATA DE FRENO',
    'PIÑÓN Y PARTE DE CAJA',
  ]

  private listaProductos = [
    { categoria: this.listaCategorias[1], nombre: 'Disco de embrague', imagen: '/assets/products/DISCO-DE-EMBRAGUE-768x551.png' },
    { categoria: this.listaCategorias[1], nombre: 'Plato de embrague', imagen: '/assets/products/PLATO-DE-EMBRAGUE-768x515.png' },
    { categoria: this.listaCategorias[1], nombre: 'Volante de motor bimbasa y bomba', imagen: '/assets/products/IPEX080internet-768x512.jpg' },
    { categoria: this.listaCategorias[2], nombre: 'Pastilla de freno HI-Q', imagen: '/assets/products/pastilla-hiq.1-2-768x469.png' },
    { categoria: this.listaCategorias[2], nombre: 'Pastilla de freno HI-Q Severe Duty', imagen: '/assets/products/pastilla-severe-duty.1-1-768x523.png' },
    { categoria: this.listaCategorias[2], nombre: 'Pastilla de freno Hagen', imagen: '/assets/products/pastilla-hagen.1-3-768x492.png' },
    { categoria: this.listaCategorias[3], nombre: 'Piñon y corona', imagen: '/assets/products/14-HANSANG-PINON-Y-CORONA-768x512.jpg' },
    { categoria: this.listaCategorias[3], nombre: 'Propulsor y deslizante', imagen: '/assets/products/PROPULSOR-Y-DESLIZANTE-3-768x636.png' },
    { categoria: this.listaCategorias[3], nombre: 'Trenfijo', imagen: '/assets/products/TRENFIJO2-768x690.jpg' },
  ];

  constructor() { }

  getListaCategorias() {
    return this.listaCategorias;
  }

  getListaProductos() {
    return this.listaProductos;
  }
}
