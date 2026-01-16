import { Component } from '@angular/core';
import { ToggleDarkMode } from '@/components/toggle-dark-mode/toggle-dark-mode';

@Component({
  selector: 'app-header',
  imports: [ToggleDarkMode],
  templateUrl: './header.html',
})
export class Header {}
