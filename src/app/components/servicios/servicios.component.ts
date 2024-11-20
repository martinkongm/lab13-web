import { Component } from '@angular/core';
import { ServiciosService } from '../../services/servicios/servicios.service';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {
  servicios: {title: string, description: string, icon: string}[];

  constructor(private serviciosService: ServiciosService) {
    this.servicios = serviciosService.getServiciosList();
  }
}
