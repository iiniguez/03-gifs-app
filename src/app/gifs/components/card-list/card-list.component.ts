import { Component } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardList {
  public cards: string[] = ['Contenedor 1', 'Contenedor 2', 'Contenedor 3', 'Contenedor 4'];
}
