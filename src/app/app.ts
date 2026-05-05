import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './landing-page/navbar/navbar';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar],
  template: `
      <router-outlet></router-outlet>
  `
})

export class App implements OnInit {

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }

}
