import { Component, inject } from '@angular/core';
import { ThemeStore } from '@/store/theme';
import { Button } from '../button/button';

@Component({
  selector: 'app-toggle-dark-mode',
  imports: [Button],
  templateUrl: './toggle-dark-mode.html',
})
export class ToggleDarkMode {
  themeStore = inject(ThemeStore); // Inyectamos el store
}
