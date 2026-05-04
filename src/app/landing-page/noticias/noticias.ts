import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.html',
  styleUrl: './noticias.scss',
})
export class Noticias {

  ultimasNoticias = [
    {
      titulo: 'UFSM anuncia novo edital',
      descricao: 'Novo edital de bolsas foi publicado hoje para alunos de graduação.',
      imagem: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
      data: '04/05/2026'
    },
    {
      titulo: 'Evento de tecnologia em Soledade',
      descricao: 'Hackathon reúne estudantes e startups da região.',
      imagem: 'https://images.unsplash.com/photo-1556761175-4b46a572b786',
      data: '03/05/2026'
    },
    {
      titulo: 'Sistema acadêmico atualizado',
      descricao: 'Nova versão traz melhorias de desempenho e usabilidade.',
      imagem: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
      data: '02/05/2026'
    }
  ];

}
