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
      cargo: 'Professor e Coordenador',
      foto: 'equipe/vinicius-maran.png',
      descricao: 'Doutorado em Ciência da Computação, Computação Ubíqua, Devops, Computação Móvel.'
    },
    {
      nome: 'Dr. Alencar Machado',
      cargo: 'Professor e Coordenador',
      foto: 'equipe/alencar-machado.jpg',
      descricao: 'Doutorado em Ciência da Computação, Computação Ubíqua, Computação Pervasiva, Computação orientada a Objetos.'
    },
    {
      nome: 'Glênio Descovi',
      cargo: 'Coordenador',
      foto: 'equipe/glenio.png',
      descricao: 'Doutorando em Ciência da Computação, Computação Ubíqua, Squad-Leader '
    },
    {
      nome: 'Matheus Friedhein Flores',
      cargo: 'Coordenador',
      foto: 'equipe/matheus.png',
      descricao: 'Mestre em Ciência da Computação, Arquiteto de Software, Squad Leader, Inteligência Artificial.'
    },
    {
      nome: 'Anderson Dotto Padoin',
      cargo: 'Técnico Admnistrativo',
      foto: 'equipe/anderson.jpg',
      descricao: 'Graduado em Sistemas para Internet, Angular'
    },
    {
      nome: 'Diones Vargas Dutra',
      cargo: 'Técnico Admnistrativo',
      foto: 'equipe/diones.jpg',
      descricao: 'Computação Ubíqua, Computação Pervasiva, Devops, Sistemas Inteligentes.'
    },
    {
      nome: 'Jonas Bulegon Gassen',
      cargo: 'PROFESSOR',
      foto: 'equipe/jonas.png',
      descricao: 'Doutorado em Ciência da Computação, Computação Móvel, Computação Pervasiva'
    },

    // MESTRANDOS
    {
      nome: 'Felipe Amadori Machado',
      cargo: 'Discente',
      foto: 'equipe/felipe.jpg',
      descricao: 'Mestrando em Ciência da Computação, Computação Pervasiva, Computação Ubíqua, Inteligência Artificial.'
    },
    {
      nome: 'Fernando Soso',
      cargo: 'Discente',
      foto: 'equipe/fernando.jpg',
      descricao: 'Mestrando em Ciência da Computação, Interfaces do Usuario, Designer de Produto.'
    },
    {
      nome: 'Francesco Krum',
      cargo: 'Discente',
      foto: 'equipe/francesco.png',
      descricao: 'Mestrando em Ciência da Computação, Blockchain, Microsserviços, Arquiteturas Semânticas.'
    },
    {
      nome: 'Gabriel Casanova',
      cargo: 'Discente',
      foto: 'equipe/gabriel-casanova.jpg',
      descricao: 'Mestrando em Ciência da Computação, Inteligência Artificial, Computação Ubíqua.'
    },
    {
      nome: 'Gabriel Fuentes',
      cargo: 'Discente',
      foto: 'equipe/fuentes.jpg',
      descricao: 'Mestrando em Ciência da Computação, Inteligência Artificial, Microsserviços.'
    },
    {
      nome: 'Gabriel Rodrigues da Silva',
      cargo: 'Discente',
      foto: 'equipe/gabriel.jpg',
      descricao: 'Mestrando em Ciência da Computação, Computação Pervasiva, Computação Ubíqua, Inteligência Artificial.'
    },
    {
      nome: 'Leonardo Petta do Nascimento',
      cargo: 'Discente',
      foto: 'equipe/leonardo.jpg',
      descricao: 'Mestrando em Ciência da Computação, Computação Ubíqua, Inteligência Artificial.'
    },
    {
      nome: 'Marco Antonio Moro Belous',
      cargo: 'Discente',
      foto: 'equipe/marco.jpg',
      descricao: 'Mestrando em Ciência da Computação, Modelos de Recomendação, Inteligência Artificial.'
    },

    {
      nome: 'Pedro Bilar Montero',
      cargo: 'Discente',
      foto: 'equipe/pedro-bilar.jpg',
      descricao: 'Mestrando em Ciência da Computação, Professor, Squad Leader, Inteligência Artificial.'
    },
    {
      nome: 'Rodrigo Seliprin',
      cargo: 'Discente',
      foto: 'equipe/rodrigo.jpeg',
      descricao: 'Mestrando em Ciência da Computação, Computação Ubíqua, Inteligência Artificial.'
    },
    {
      nome: 'Thales Augusto Lagemann',
      cargo: 'Discente',
      foto: 'equipe/thales.jpg',
      descricao: 'Mestrando em Ciência da Computação, Computação Movél, Computação Ubíqua.'
    },
    {
      nome: 'Bruno Fetzer',
      cargo: 'Discente',
      foto: 'equipe/brunof.jpeg',
      descricao: 'Graduando em Sistemas Para Internet, Interfaces do Usuario, UI/UX.'
    },

    {
      nome: 'Bruno Gonçalves Muniz',
      cargo: 'Discente',
      foto: 'equipe/muniz.jpeg',
      descricao: 'Graduando em Sistemas Para Internet, Interfaces do Usuario, UI/UX.'
    },
    {
      nome: 'Diogo Machado',
      cargo: 'Discente',
      foto: 'equipe/diogo.jpeg',
      descricao: 'Graduando em Sistemas Para Internet, Programação Mobile, Sistemas de Informação.'
    },
    {
      nome: 'Eduardo Schlersner',
      cargo: 'Discente',
      foto: 'equipe/eduardo.jpeg',
      descricao: 'Graduando em Engenharia da Computação, Inteligencia Artificial.'
    },
    {
      nome: 'João Victor Guedes',
      cargo: 'Discente',
      foto: 'equipe/gue10.jpg',
      descricao: 'Graduando em Sitemas Para Internet, Desenvolvedor Fullstack, Microsserviços.'
    },
    {
      nome: 'Joloano Korzekwa Pereira',
      cargo: 'Discente',
      foto: 'equipe/joloano.JPEG',
      descricao: 'Graduando em Sistemas Para Internet.'
    },
    {
      nome: 'Lorena Finamor Carvalo',
      cargo: 'Discente',
      foto: 'equipe/lorena.jpeg',
      descricao: 'Graduanda em Sistemas Para Internet.'
    },
    {
      nome: 'Lucas da Silva Lins Baía',
      cargo: 'Discente',
      foto: 'equipe/lucas.png',
      descricao: 'Técnico em Informatica, Designer de Interfaces, Product Designer.'
    },
    {
      nome: 'Luiza Crumenauer',
      cargo: 'Discente',
      foto: 'equipe/luiza.jpg',
      descricao: 'Graduanda em Sistemas Para Internet, Interfaces do Usuario, UI/UX.'
    },
    {
      nome: 'Mauro Schmidt Moro',
      cargo: 'Discente',
      foto: 'equipe/mauro.jpg',
      descricao: 'Graduando em Sistemas Para Internet'
    },
    {
      nome: 'Murilo Wilke',
      cargo: 'Discente',
      foto: 'equipe/murilo.jpeg',
      descricao: 'Graduando em Sistemas Para Internet, Computação Móvel.'
    },
    {
      nome: 'Thiago Paulo Both',
      cargo: 'Discente',
      foto: 'equipe/thiago.jpg',
      descricao: 'Graduando em Sistemas Para Internet, Devops, CI/CD.'
    },
    {
      nome: 'Vinicius Woltmann Abaddy',
      cargo: 'Discente',
      foto: 'equipe/vini-lumac.png',
      descricao: 'Graduando em Sistemas Para Internet, Microsserviços e Computação Movél.'
    },
  ];

}
