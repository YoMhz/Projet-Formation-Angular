import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

// Rendu de la vue avec import directive et pipe
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ListPokemonComponent, DetailPokemonComponent],
  templateUrl: './app.component.html',
  styles: [],
})

// variables et méthodes
// implémenter OnInit et le déclarer dans la classe avec ngOnInit

export class AppComponent {
  title = 'learn-angular-pokemon';
  // pokemonList = ['Bulbizarre', 'Salamèche', 'Carapuce'];
  // pokemonList: Pokemon[] = POKEMONS;
  // pokemonSelected: Pokemon|undefined;
  

  //Rajouter this pour que pour que pokemonList entre dans le scope de mon console table.

  // ngOnInit() {
  //   console.table(this.pokemonList);
  //   this.selectPokemon(this.pokemonList[0]);
  // }

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

  // selectPokemon(pokemonId: string) {
  //   const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
  //   //Condition de message de rendu :
  //   if(pokemon){
  //     console.log(`Vous avez demandé le pokémon ${pokemon.name}`);
  //     this.pokemonSelected = pokemon;
  //   } else {
  //     console.log(`Ce pokémon n'existe pas !`);
  //     this.pokemonSelected = pokemon;
  //   }
  // }
}
