import { Component } from '@angular/core';
import { ToggleDarkMode } from '@/components/toggle-dark-mode/toggle-dark-mode';
import { Card } from '@/components/card/card';

import { LoginForm } from '../components/login-form/login-form';

@Component({
  selector: 'app-login',
  imports: [ToggleDarkMode, Card, LoginForm],
  templateUrl: './login.page.html',
})
export class LoginPage {
  // AQUÍ VA LA FUNCIÓN
  onLogin() {
    // Aquí puedes llamar a un servicio de autenticación,
    // validar campos, o navegar a otra página.
  }
}
