import { Component, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';

import { lucideSettings } from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';

type Lang = 'pt' | 'en' | 'es';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass,
    NgIcon
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  providers: [
    provideIcons({
      lucideSettings
    })
  ]
})
export class Navbar {

  scrolled = signal(false);
  menuOpen = signal(false);

  showLanguageMenu = false;

  currentLang: Lang = 'pt';

  navLinks = [
    { label: 'INÍCIO', href: '#inicio' },
    { label: 'INTERESSES', href: '#interesses' },
    { label: 'NOTÍCIAS', href: '#noticias' },
    { label: 'PROJETOS', href: '#projetos' },
    { label: 'EQUIPE', href: '#equipe' },
    { label: 'TECNOLOGIAS', href: '#tecnologias' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 60);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  toggleLanguageMenu(): void {
    this.showLanguageMenu = !this.showLanguageMenu;
  }

  changeLang(lang: Lang): void {
    this.currentLang = lang;
    this.showLanguageMenu = false;

    console.log('Idioma selecionado:', lang);
  }
}
