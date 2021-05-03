import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesPokemonsService {

  constructor() { }

  addPokemon(pokemon: any) {
    const test = localStorage.getItem('myFavoritepokemons');
    let obj = [];
    if(test){
      obj= JSON.parse(test);  
    }
    const index = obj.findIndex((pok: any) => pok.name === pokemon.name);
    if (index < 0){
      obj.push(pokemon);
    }
    localStorage.setItem('myFavoritepokemons',JSON.stringify(obj));
  }

  getMesPokemons() {
    const pok = JSON.parse(localStorage.getItem('myFavoritepokemons') || '{}');
    return pok;
  }

  deletePokemon (pokemon: any) {
    const test = localStorage.getItem('myFavoritepokemons');
    let obj = [];
    if(test){
      obj= JSON.parse(test);  
    }
    const index = obj.findIndex((pok: any) => pok.name === pokemon.name);
    obj.splice(index, 1);
    localStorage.setItem('myFavoritepokemons',JSON.stringify(obj));
    document.location.reload();
  }

}
