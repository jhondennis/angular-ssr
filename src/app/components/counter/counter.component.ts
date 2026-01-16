import { Component, signal } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-counter',
  imports: [Button],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  counter = signal(0);
  variable = signal(1);

  handleAdd() {
    this.counter.update((v) => v + this.variable());
  }

  handleSubtract() {
    this.counter.update((v) => v - this.variable());
  }

  actualizarTexto(evento: Event) {
    const elemento = evento.target as HTMLInputElement;
    this.variable.set(Number(elemento.value));
  }
}
