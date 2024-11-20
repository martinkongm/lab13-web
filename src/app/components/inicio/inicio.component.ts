import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  headingLines = ["REPUESTOS EN GENERAL", "para camiones de todas las", "marcas."]
  inicioDescripcion = 'Somos una empresa importadora de repuestos.';
}
