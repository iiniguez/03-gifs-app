import { Component } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardList {
  public cards: string[] = ['Tarjeta 1', 'Tarjeta 2', 'Tarjeta 3', 'Tarjeta 4', 'Tarjeta 5', 'Tarjeta 6', 'Tarjeta 7', 'Tarjeta 8'];
}
