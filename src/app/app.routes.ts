import { Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-note-found/page-note-found.component';

// Angular lit les route du haut vers le bas il y à un sens !!

export const routes: Routes = [
    {path: 'pokemons', component: ListPokemonComponent},
    {path: 'pokemon/:id', component: DetailPokemonComponent},
    {path: '', redirectTo: 'pokemons', pathMatch: "full"},
    {path: '**', component: PageNotFoundComponent},
];
