import { effect, Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeStore {
  // Inyectamos el ID de la plataforma
  private platformId = inject(PLATFORM_ID);

  // Inicializamos con un valor por defecto (false) para evitar errores en el servidor
  private _darkMode = signal<boolean>(false);
  darkMode = this._darkMode.asReadonly();

  constructor() {
    // Inicializamos el estado basado en si la clase 'dark' ya está presente (puesta por index.html script)
    if (isPlatformBrowser(this.platformId)) {
      this._darkMode.set(document.documentElement.classList.contains('dark'));
    }

    // Efecto reactivo: sincroniza cambios con DOM y localStorage
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        const isDark = this._darkMode();
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      }
    });
  }

  toggle() {
    this._darkMode.update((state) => !state);
  }
}
