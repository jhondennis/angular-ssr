import { CommonModule } from '@angular/common';
import { Component, contentChild, ElementRef, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styles: ``,
})
export class Card {
  // Parametros tipo MUI
  title = input<string>('');
  subtitle = input<string>('');
  padding = input<boolean>(true);
  hover = input<boolean>(true); // Efecto de elevación al pasar el mouse

  // Detecta si existe el slot de acciones
  hasActions = contentChild<ElementRef>('actions');
}
