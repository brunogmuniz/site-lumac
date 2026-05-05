import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { HeroSection } from './hero-section/hero-section';
import { Noticias } from './noticias/noticias';
import Lenis from "lenis";
import {Areas} from './areas/areas';
import {Projetos} from './projetos/projetos';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    Navbar,
    HeroSection,
    Noticias,
    Areas,
    Projetos
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  ngOnInit(): void {
    const lenis = new Lenis({
      duration: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
}
