import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Noticia, NoticiaService } from '../../core/noticia.service';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.html',
  styleUrl: './noticias.scss',
})
export class Noticias implements OnInit {

  ultimasNoticias: Noticia[] = [];
  carregando = true;

  constructor(private noticiaService: NoticiaService) {}

  ngOnInit(): void {
    this.noticiaService.listarPublicadas().subscribe({
      next: (data) => {
        this.ultimasNoticias = data;
        this.carregando = false;
      },
      error: () => {
        this.carregando = false;
      }
    });
  }
}
