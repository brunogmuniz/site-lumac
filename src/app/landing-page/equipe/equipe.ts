import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MembroEquipe {
  nome: string;
  cargo: string;
  foto: string;
  descricao: string;
}

@Component({
  selector: 'app-equipe',
  imports: [CommonModule],
  templateUrl: './equipe.html',
  styleUrl: './equipe.scss',
})
export class Equipe {

  membros: MembroEquipe[] = [
    {
      nome: 'Dr. Vínicius Maran',
      cargo: 'PROFESSOR E COORDENADOR',
      foto: 'equipe/vinicius-maran.png',
      descricao: 'Doutorado em Ciência da Computação, Computação Ubíqua, Devops, Computação Móvel.'
    },
    {
      nome: 'Alencar Machado',
      cargo: 'PROFESSOR E COORDENADOR',
      foto: 'equipe/alencar-machado.jpg',
      descricao: 'Doutorado em Ciência da Computação, Computação Ubíqua, Computação Pervasiva, Computação orientada a Objetos.'
    },
    {
      nome: 'Glênio Descovi',
      cargo: 'PROFESSOR',
      foto: 'equipe/glenio.png',
      descricao: 'Mestrando em Ciência da Computação, Computação Ubíqua, Squad-Leader '
    },
    {
      nome: 'Jonas Bulegon Gassen',
      cargo: 'PROFESSOR',
      foto: 'equipe/jonas.png',
      descricao: 'Doutorado em Ciência da Computação, Computação Móvel, Computação Pervasiva'
    },
    {
      nome: 'Anderson Dotto Padoin',
      cargo: 'TECNICO ADMINISTRATIVO',
      foto: 'equipe/anderson.jpg',
      descricao: 'Graduado em Sistemas para Internet, Angular'
    },
    {
      nome: 'Diones Vargas Dutra',
      cargo: 'TECNICO ADMINISTRATIVO',
      foto: 'equipe/diones.jpg',
      descricao: 'Computação Ubíqua, Computação Pervasiva, Devops, Sistemas Inteligentes.'
    },
    {
      nome: 'Matheus Friedhein Flores',
      cargo: 'Discente',
      foto: 'equipe/matheus.png',
      descricao: 'Mestre em Ciência da Computação, Arquiteto de Software, Squad Leader.'
    },
    {
      nome: 'Pedro Bilar Montero',
      cargo: 'Discente',
      foto: 'equipe/pedro-bilar.jpg',
      descricao: 'Mestrando em Ciência da Computação, Professor, Squad Leader.'
    },
    {
      nome: 'Gabriel Rodrigues da Silva',
      cargo: 'Discente',
      foto: 'equipe/gabriel.jpg',
      descricao: 'Mestrando em Ciência da Computação, Computação Pervasiva, Computação Ubíqua.'
    },
    {
      nome: 'Felipe Amadori Machado',
      cargo: 'Discente',
      foto: 'equipe/felipe.jpg',
      descricao: 'Mestrando em Ciência da Computação, Computação Pervasiva, Computação Ubíqua.'
    },
    {
      nome: 'Thales Augusto Lagemann',
      cargo: 'Discente',
      foto: 'equipe/thales.jpg',
      descricao: 'Mestrando em Ciência da Computação, Computação Movél, Computação Ubíqua.'
    },
    {
      nome: 'Gabriel Casanova',
      cargo: 'Discente',
      foto: 'equipe/gabriel-casanova.jpg',
      descricao: 'Mestrando em Ciência da Computação, Inteligência Artificial, Computação Ubíqua.'
    },
    {
      nome: 'Lucas da Silva Lins Baía',
      cargo: 'Discente',
      foto: 'equipe/lucas.png',
      descricao: 'Técnico em Informatica, Designer de Interfaces, Product Designer.'
    },
    {
      nome: 'Mauro Schmidt Moro',
      cargo: 'Discente',
      foto: 'equipe/mauro.jpg',
      descricao: 'Graduando em Sistemas Para Internet'
    },
    {
      nome: 'Marco Antonio Moro Belous',
      cargo: 'Discente',
      foto: 'equipe/marco.jpg',
      descricao: 'Mestrando em Ciência da Computação, Modelos de Recomendação, Inteligência Artificial.'
    },
    {
      nome: 'Fernando Soso',
      cargo: 'Discente',
      foto: 'equipe/fernando.jpg',
      descricao: 'Mestrando em Ciência da Computação, Interfaces do Usuario, Designer de Prdouto.'
    },
    {
      nome: 'Francesco Krum',
      cargo: 'Discente',
      foto: 'equipe/francesco.png',
      descricao: 'Mestrando em Ciência da Computação, CI/CD, Microsserviços.'
    },
    {
      nome: 'Thiago Paulo Both',
      cargo: 'Discente',
      foto: 'equipe/thiago.jpg',
      descricao: 'Graduando em Sistemas Para Internet, Devops.'
    },
    {
      nome: 'Luiza Crumenauer',
      cargo: 'Discente',
      foto: 'equipe/luiza.jpg',
      descricao: 'Graduanda em Sistemas Para Internet, Interfaces do Usuario, UI/UX.'
    },
    {
      nome: 'João Victor Guedes',
      cargo: 'Discente',
      foto: 'equipe/gue10.jpg',
      descricao: 'Graduando em Sitemas Para Internet.'
    },
    {
      nome: 'Murilo Wilke',
      cargo: 'Discente',
      foto: 'equipe/murilo.jpeg',
      descricao: 'Graduando em Sistemas Para Internet, Computação Móvel.'
    },
    {
      nome: 'Gabriel Fuentes',
      cargo: 'Discente',
      foto: 'equipe/fuentes.jpg',
      descricao: 'Mestrando em Ciência da Computação.'
    },
    {
      nome: 'Bruno Gonçalves Muniz',
      cargo: 'Discente',
      foto: 'equipe/muniz.jpeg',
      descricao: 'Graduando em Sistemas Para Internet, Interfaces do Usuario, UI/UX.'
    },
    {
      nome: 'Rodrigo Seliprin',
      cargo: 'Discente',
      foto: 'equipe/rodrigo.jpeg',
      descricao: 'Mestrando em Ciência da Computação, Computação Ubíqua.'
    },
    {
      nome: 'Leonardo Petta do Nascimento',
      cargo: 'Discente',
      foto: 'equipe/leonardo.jpg',
      descricao: 'Mestrando em Ciência da Computação, Computação Ubíqua.'
    },
    {
      nome: 'Joloano Korzekwa Pereira',
      cargo: 'Discente',
      foto: 'equipe/joloano.JPEG',
      descricao: 'Graduando em Sistemas Para Internet.'
    },





  ];

}
