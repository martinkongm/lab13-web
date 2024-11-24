import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises/paises.service';
import { KeyValuePipe } from '@angular/common';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-paises',
  standalone: true,
  imports: [KeyValuePipe],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.scss'
})
export class PaisesComponent implements OnInit {
  paisesData: Country[] = [];

  constructor(private paisesService: PaisesService) {

  }

  ngOnInit(): void {
    this.getPais("Peru", 0);
    this.getPais("Argentina", 1);
    this.getPais("Germany", 2);
    this.getPais("Spain", 3);
    this.getPais("Brazil", 4);
    this.getPais("China", 5);
  }

  getPais(nombre: string, index: number): void {
    this.paisesService.getCountryByName(nombre).subscribe(pais => {
      this.paisesData[index] = pais[0];
    });
  }
}
