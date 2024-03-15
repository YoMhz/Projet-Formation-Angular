import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';


// Rendu de la vue
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Liste de Pokémons</h1>

    <router-outlet />
  `,
  styles: [],
})

// variables et méthodes
// implémenter OnInit et le déclarer dans la classe avec ngOnInit

export class AppComponent implements OnInit {
  title = 'learn-angular-pokemon';
  // pokemonList = ['Bulbizarre', 'Salamèche', 'Carapuce'];
  pokemonList: Pokemon[] = POKEMONS;
  

  //Rajouter this pour que pour que pokemonList entre dans le scope de mon console table.

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  //fonction pour évènement click de l'utilisateur avec en paramètre pokémonName.

  selectPokemon(pokemon : Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }
}
