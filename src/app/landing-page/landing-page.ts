import { Component } from '@angular/core';
import {Navbar} from './navbar/navbar';
import {HeroSection} from './hero-section/hero-section';

@Component({
  selector: 'app-landing-page',
  imports: [
    Navbar,
    HeroSection
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {

}
