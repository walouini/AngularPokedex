import { Component, OnInit } from '@angular/core';
import { MesPokemonsService } from 'src/app/services/mes-pokemons.service';
import { PokemonService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  pokemons: any[] = [];

  constructor(
    private PokemonService : PokemonService,
    private MesPokemonsService : MesPokemonsService
  ) { }

  ngOnInit(): void {
  }

  getSearch(pokemon: number | string) {
    this.pokemons.length = 0;
    return this.PokemonService.getPokemonDetail(pokemon).subscribe(
      (response: any) => {
        this.pokemons.push(response);
      }
  )};

  addPokemoninMyList(pokemon: any) {
    this.MesPokemonsService.addPokemon(pokemon);
  };

  getAbilities(pokemon: any): string {
    return pokemon.abilities.map((x: { ability: { name: any; }; }) => x.ability.name).join(', ');
  };

}
