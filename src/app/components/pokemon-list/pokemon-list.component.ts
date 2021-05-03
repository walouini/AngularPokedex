import { Component, OnInit } from '@angular/core';
import { MesPokemonsService } from 'src/app/services/mes-pokemons.service';
import { PokemonService } from 'src/app/services/pokemons.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];
  page = 0;
  totalPokemons: number | undefined;

  constructor(
    private pokemonService : PokemonService,
    private MesPokemonsService : MesPokemonsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getPokemonList(300, this.page + 0).subscribe(
      (response: any) => {
        this.totalPokemons = response.count;
        response.results.forEach((element: { name: string | number; }) => {
          this.pokemonService.getPokemonDetail(element.name).subscribe(
            (uniqresponse: any) => {
              this.pokemons.push(uniqresponse);
            }
          );
        });
      }
    );
  };

  addPokemoninMyList(pokemon: any) {
    this.MesPokemonsService.addPokemon(pokemon);
  };

  onDetail(pokemon: any) {
    this.dialog.open(PopupComponent, {
      data: { pokemon }
    });
  };

}
