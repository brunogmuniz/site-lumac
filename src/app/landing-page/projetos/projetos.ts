import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Projeto {
  name: string;
  description: string;
  url: string;
  mockup?: string;
}

@Component({
  selector: 'app-projetos',
  imports: [CommonModule],
  templateUrl: './projetos.html',
  styleUrl: './projetos.scss',
})
export class Projetos implements OnInit, OnDestroy {

  projects: Projeto[] = [
    {
      name: 'PDSA - Plataforma de Defesa Sanitária Animal do Rio Grande do Sul',
      description: 'Plataforma que aproxima empresas e serviço oficial para proporcionar total controle na rastreabilidade dos processos.',
      url: 'https://pdsa-rs.com.br/home',
      mockup: 'projetos/pdsa.png',
    },
    {
      name: 'PNIP - Plataforma Nacional da Indústria do Pescado - Projeto Nacional',
      description: 'Ferramenta para gestão de embarcações de pesca industrial, com controle operacional, rotas e tripulação.',
      url: 'https://pnip.mpa.gov.br/login',
      mockup: 'projetos/pnip.png',
    }
  ];

  currentIndex = 0;
  private autoplayInterval: any;

  get currentProject(): Projeto {
    return this.projects[this.currentIndex];
  }

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  next(): void {
    this.currentIndex =
      (this.currentIndex + 1) % this.projects.length;

    this.restartAutoplay();
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.projects.length) %
      this.projects.length;

    this.restartAutoplay();
  }

  goTo(index: number): void {
    this.currentIndex = index;
    this.restartAutoplay();
  }

  onImgError(): void {
    this.currentProject.mockup = undefined;
  }

  private startAutoplay(): void {
    this.autoplayInterval =
      setInterval(() => this.next(), 5000);
  }

  private stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  private restartAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }

}
