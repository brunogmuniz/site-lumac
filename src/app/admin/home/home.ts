import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { Noticia, NoticiaRequest, NoticiaService } from '../../core/noticia.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  noticias: Noticia[] = [];
  carregando = false;
  salvando = false;
  erro = '';
  sucesso = '';

  // Formulário de cadastro
  form: NoticiaRequest = {
    titulo: '',
    resumo: '',
    dataPublicacao: '',
    linkRedirecionamento: '',
    imagemUrl: '',
  };

  constructor(
    private noticiaService: NoticiaService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.carregarNoticias();
  }

  get nomeUsuario(): string {
    return this.authService.getUser()?.name ?? 'Admin';
  }

  carregarNoticias(): void {
    this.carregando = true;
    this.noticiaService.listarTodas().subscribe({
      next: (data) => {
        this.noticias = data.sort(
          (a, b) => new Date(b.dataPublicacao).getTime() - new Date(a.dataPublicacao).getTime()
        );
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Erro ao carregar notícias.';
        this.carregando = false;
      }
    });
  }

  cadastrar(): void {
    if (!this.form.titulo || !this.form.resumo || !this.form.dataPublicacao) {
      this.erro = 'Título, resumo e data são obrigatórios.';
      return;
    }

    this.salvando = true;
    this.erro = '';
    this.sucesso = '';

    const payload: NoticiaRequest = {
      ...this.form,
      dataPublicacao: new Date(this.form.dataPublicacao).toISOString(),
    };

    this.noticiaService.cadastrar(payload).subscribe({
      next: () => {
        this.sucesso = 'Notícia cadastrada com sucesso!';
        this.resetForm();
        this.carregarNoticias();
        this.salvando = false;
      },
      error: () => {
        this.erro = 'Erro ao cadastrar notícia.';
        this.salvando = false;
      }
    });
  }

  publicar(id: number): void {
    this.noticiaService.publicar(id).subscribe({
      next: () => this.carregarNoticias(),
      error: () => this.erro = 'Erro ao publicar notícia.'
    });
  }

  excluir(id: number): void {
    if (!confirm('Confirma exclusão desta notícia?')) return;
    this.noticiaService.excluir(id).subscribe({
      next: () => this.carregarNoticias(),
      error: () => this.erro = 'Erro ao excluir notícia.'
    });
  }

  logout(): void {
    this.authService.logout();
  }

  private resetForm(): void {
    this.form = {
      titulo: '',
      resumo: '',
      dataPublicacao: '',
      linkRedirecionamento: '',
      imagemUrl: '',
    };
  }
}
