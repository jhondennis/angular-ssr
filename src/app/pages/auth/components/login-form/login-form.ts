import { Component } from '@angular/core';

import { Button } from '@/components/button/button';
import { Input } from '@/components/input/input';

@Component({
  selector: 'app-login-form',
  imports: [Input, Button],
  templateUrl: './login-form.html',
})
export class LoginForm {}
