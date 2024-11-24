import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonesService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<any>(`${this.apiUrl}${name}`).pipe(
      map((data) => ({
        name: data.name,
        abilities: data.abilities.map((ability: any) => ability.ability.name),
        sprite: data.sprites.front_default,
        types: data.types.map((type: any) => type.type.name),
        moves: data.moves.slice(0, 4).map((move: any) => move.move.name),
        weight: data.weight,
      }))
    );
  }
}
