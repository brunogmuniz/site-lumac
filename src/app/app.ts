import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './landing-page/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar],
  template: `
      <router-outlet></router-outlet>
  `
})
export class App {}
