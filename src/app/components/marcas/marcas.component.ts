import { Component } from '@angular/core';
import { MarcasService } from '../../services/marcas/marcas.service';

@Component({
  selector: 'app-marcas',
  standalone: true,
  imports: [],
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.scss'
})
export class MarcasComponent {
  marcas: {imagen: string, descripcion: string}[];

  constructor(private marcasService: MarcasService) {
    this.marcas = marcasService.getMarcasItems();
  }
}
