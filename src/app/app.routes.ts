import { Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-note-found/page-note-found.component';
import { ApiCallPokemonComponent } from './api-call-pokemon/api-call-pokemon.component';

// Angular lit les route du haut vers le bas il y à un sens !!
// Title permet de nommer les pages.

export const routes: Routes = [
    {path: 'pokemon/api-call', component: ApiCallPokemonComponent},
    {path: 'pokemons', title: 'Pokédex', component: ListPokemonComponent},
    {path: 'pokemon/:id', component: DetailPokemonComponent},
    {path: '', redirectTo: 'pokemons', pathMatch: "full"},
    {
        path: '**',
        title: 'Erreur',
        loadComponent: () => import("./page-note-found/page-note-found.component").then(module => module.PageNotFoundComponent)
    },
];
