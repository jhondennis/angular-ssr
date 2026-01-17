import { CommonModule } from '@angular/common';
import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [CommonModule],
  templateUrl: './input.html',
  styles: ``,
})
export class Input {
  // Nuevos Signal Inputs (Solo lectura desde el padre)
  label = input<string>('Label');
  type = input<string>('text');
  id = input<string>('input-' + Math.random().toString(36).substring(2, 9));
  hasError = input<boolean>(false);
  errorMessage = input<string>('Campo requerido');

  // Writable Signal para el valor (Two-way binding moderno)
  value = model<string>('');
}
