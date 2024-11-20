import { Component } from '@angular/core';
import { NosotrosService } from '../../services/nosotros/nosotros.service';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent {
  items: { area: string, image: string }[];

  constructor(private nosotrosService: NosotrosService) {
    this.items = nosotrosService.getNosotrosItems();
  }
}
