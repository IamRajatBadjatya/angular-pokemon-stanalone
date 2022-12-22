import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Pokemon } from '../pokemon.model';
import { fadeAnimation } from './pokemon-card.animation';
import { BadgeBgPipe } from '../badge-bg.pipe';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [/* BrowserAnimationsModule */ CommonModule, BadgeBgPipe],
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon;
}
