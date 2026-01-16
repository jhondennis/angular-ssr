import { Component } from '@angular/core';
import { Button } from '@/components/button/button';

@Component({
  selector: 'app-login',
  imports: [Button],
  templateUrl: './login.page.html',
})
export class LoginPage {
  // AQUÍ VA LA FUNCIÓN
  onLogin() {
    console.error('El botón fue presionado y la función ejecutada');
    // Aquí puedes llamar a un servicio de autenticación,
    // validar campos, o navegar a otra página.
  }
}
