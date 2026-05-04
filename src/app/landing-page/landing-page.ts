import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { HeroSection } from './hero-section/hero-section';
import { Noticias } from './noticias/noticias';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    Navbar,
    HeroSection,
    Noticias
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}
