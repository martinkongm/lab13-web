import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos/productos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {
  
  categorias: string[];

  categoriaSeleccionada: string;

  productos: { categoria: string, nombre: string, imagen: string }[];

  constructor(private productoService: ProductosService) {
    this.categorias = this.productoService.getListaCategorias();
    this.productos = this.productoService.getListaProductos();
    this.categoriaSeleccionada = this.categorias[0];
  }

  get productosFiltrados() {
    if (this.categoriaSeleccionada === 'TODAS LAS CATEGORIAS') {
      return this.productos;
    }
    return this.productos.filter(producto => producto.categoria === this.categoriaSeleccionada);
  }

  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

}