import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

export interface Noticia {
  id: number;
  titulo: string;
  resumo: string;
  dataPublicacao: string;
  linkRedirecionamento?: string;
  imagemUrl?: string;
  publicada: boolean;
}

export interface NoticiaRequest {
  titulo: string;
  resumo: string;
  dataPublicacao: string; // ISO 8601 ex: "2026-06-16T12:00:00Z"
  linkRedirecionamento?: string;
  imagemUrl?: string;
}

@Injectable({ providedIn: 'root' })
export class NoticiaService {

  private readonly apiUrl = `${environment.apiUrl}/noticias`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private authHeaders(): HttpHeaders {
    return new HttpHeaders({ Authorization: `Bearer ${this.authService.getToken()}` });
  }

  listarPublicadas(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(`${this.apiUrl}/publicadas`);
  }

  listarTodas(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.apiUrl, { headers: this.authHeaders() });
  }

  cadastrar(payload: NoticiaRequest): Observable<Noticia> {
    return this.http.post<Noticia>(this.apiUrl, payload, { headers: this.authHeaders() });
  }

  publicar(id: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${id}/publicar`, {}, { headers: this.authHeaders() });
  }

  publicarTodas(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/publicar-todas`, {}, { headers: this.authHeaders() });
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.authHeaders() });
  }
}
