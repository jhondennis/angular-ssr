import { Component, inject } from '@angular/core';
import { ThemeStore } from '@/store/theme';

@Component({
  selector: 'app-toggle-dark-mode',
  imports: [],
  templateUrl: './toggle-dark-mode.html',
})
export class ToggleDarkMode {
  themeStore = inject(ThemeStore); // Inyectamos el store
}
