import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  pokemon: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) 
  {
    this.pokemon = data.pokemon;
  }

  ngOnInit(): void {
    console.log(this.pokemon);
  }

  getAbilities(): string {
    return this.pokemon.abilities.map((x: { ability: { name: any; }; }) => x.ability.name).join(', ');
  }

}
