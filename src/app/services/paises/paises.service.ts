import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private baseUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  getCountryByName(countryName: string): Observable<Country[]> {
    const url = `${this.baseUrl}/name/${countryName}?fullText=true`;
    return this.http.get<Country[]>(url);
  }
}
