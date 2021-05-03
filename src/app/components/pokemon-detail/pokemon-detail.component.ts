import { Component, OnInit } from '@angular/core';
import { MesPokemonsService } from 'src/app/services/mes-pokemons.service';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  mesPokemon: any[] = [];
  constructor( private MesPokemonsService : MesPokemonsService,
    public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.mesPokemon = this.getMesPokemonsList();
  }

  getMesPokemonsList() {
    return this.MesPokemonsService.getMesPokemons();
  };

  delete(pokemon:any) {
    this.MesPokemonsService.deletePokemon(pokemon);
  }

  onDetail(pokemon: any) {
    this.dialog.open(PopupComponent, {
      data: { pokemon }
    });
  };

}
