import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private serviciosList = [
    { title: 'Ventas', description: 'Venta de los mejores repuestos de partes de motor, cajas, transmisiones, piñones, coronas y trenes fijos de las marcas de Korea y Japon. A los mejores precios del mercado.', icon: 'bi bi-briefcase' },
    { title: 'Asesoría', description: 'Le brindamos una asesoría personalidad acerca de nuestros productos, a elegir el mejor repuesto para su movilidad.', icon: 'bi bi-card-checklist' },
    { title: 'Delivery', description: 'Compras sin salir de casa, realizamos entregas a domicilio en el menor tiempo posible.', icon: 'bi bi-bar-chart' },
    { title: 'Productos', description: 'Contamos con las mejores marcas y calidad de productos del mercado.', icon: 'bi bi-binoculars' },
  ]

  constructor() { }

  getServiciosList() {
    return this.serviciosList;
  }
}
