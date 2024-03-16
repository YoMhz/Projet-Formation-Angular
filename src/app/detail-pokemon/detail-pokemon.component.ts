import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe],
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})
export class DetailPokemonComponent {
  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    }
  }
}
