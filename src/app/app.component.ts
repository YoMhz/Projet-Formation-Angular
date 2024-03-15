import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';


// Rendu de la vue
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})

// variables et méthodes
// implémenter OnInit et le déclarer dans la classe avec ngOnInit

export class AppComponent implements OnInit {
  title = 'learn-angular-pokemon';
  // pokemonList = ['Bulbizarre', 'Salamèche', 'Carapuce'];
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon;
  

  //Rajouter this pour que pour que pokemonList entre dans le scope de mon console table.

  ngOnInit() {
    console.table(this.pokemonList);
    // this.selectPokemon(this.pokemonList[0]);
  }

  //fonction pour évènement click de l'utilisateur avec en paramètre pokémonName.

  // selectPokemon(pokemon : Pokemon) {
  //   console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  // }

  //Modification de la fonction selectPokemon pour que l'utilisateur écrive dans un input text un nombre pour qu'il puisse récupérer le pokémon choisi.
  // dans const index le "+" signifie que je modifie une string en nombre (genre de ParseInt). On mentionne les éléments du DOM pour l'intéraction de input et de l'index.

  // selectPokemon(event : MouseEvent) {
  //   const index: number = +(event.target as HTMLInputElement).value;
  //   console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[index].name}`);
  // }

  selectPokemon(pokemonId: string) {
    const id = +pokemonId;
    console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[id].name}`)
  }
}
