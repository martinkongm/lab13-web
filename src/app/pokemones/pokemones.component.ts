import { Component } from '@angular/core';
import { PokemonesService } from '../services/pokemones/pokemones.service';
import { Pokemon } from '../models/pokemon.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pokemones.component.html',
  styleUrl: './pokemones.component.scss'
})
export class PokemonesComponent {
  pokemon: Pokemon | null = null;
  pokemonList: Pokemon[] = [];
  pokemonName: string = '';

  constructor(private pokemonesService: PokemonesService) {}

  ngOnInit(): void {
    this.fetchPokemon('ditto');
    this.fetchPokemon('pikachu');
    this.fetchPokemon('lugia');
    this.fetchPokemon('togepi');
    this.fetchPokemon('articuno');
    this.fetchPokemon('rayquaza');
    this.fetchPokemon('squirtle');
    this.fetchPokemon('cyndaquil');
  }

  fetchPokemon(name: string): void {
    this.pokemonesService.getPokemon(name).subscribe(poke => {
      this.pokemonList.push(poke);
    });
  }

  searchPokemon(): void {
    if (!this.pokemonName) return;
    this.pokemonesService.getPokemon(this.pokemonName).subscribe(poke => {
      this.pokemon = poke;
    });
  }
}