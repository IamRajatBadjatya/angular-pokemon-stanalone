import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemon } from './pokemon.model';
import { PokemonGridWithControlsComponent } from './pokemon-grid-with-controls/pokemon-grid-with-controls.component';
import { PokemonService } from './pokemon.service';

@Component({
  standalone: true,
  imports: [PokemonGridWithControlsComponent, CommonModule, HttpClientModule],
  providers: [PokemonService],
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  pokemons$: Observable<Pokemon[]> = this.pokemonService.getPokemons();
  constructor(private readonly pokemonService: PokemonService) {}
}
