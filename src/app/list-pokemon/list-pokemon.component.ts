import { Component } from '@angular/core';
import { NgFor, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { BorderCardDirective } from '../border-card.directive';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [PokemonTypeColorPipe, NgFor, DatePipe, BorderCardDirective],
  templateUrl: './list-pokemon.component.html',
  styles: ``
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router) {

  }

  goToPokemonCard(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id])
  }
}
