import { Component, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  scrolled = signal(false);
  menuOpen = signal(false);

  navLinks = [
    { label: 'INÍCIO', href: '#inicio' },
    { label: 'NOTÍCIAS', href: '#noticias' },
    { label: 'EQUIPE', href: '#equipe' },
    { label: 'INTERESSES', href: '#interesses' },
    { label: 'PROJETOS', href: '#projetos' },
  ];

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrolled.set(window.scrollY > 60);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }
}
