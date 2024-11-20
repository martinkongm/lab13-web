import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductosComponent } from "./components/productos/productos.component";
import { MarcasComponent } from "./components/marcas/marcas.component";



@Component({
  selector: 'app-root',
  imports: [NavbarComponent, InicioComponent, NosotrosComponent, ServiciosComponent, ProductosComponent, MarcasComponent],
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
}
