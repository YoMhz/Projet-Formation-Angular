import { Component, inject, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-call-pokemon',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './api-call-pokemon.component.html',
  styles: ``
})
export class ApiCallPokemonComponent implements OnInit {
httpClient = inject(HttpClient);
data = []

ngOnInit(): void {
  this.fetchData()
}

fetchData(){
  this.httpClient
  .get('https://pokebuildapi.fr/api/v1/pokemon')
  .subscribe((data: any) => {
    console.log(data);
    this.data = data
  })
}
}
