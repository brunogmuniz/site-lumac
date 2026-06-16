import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMapPin } from '@ng-icons/lucide';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login-poli',
  imports: [CommonModule, FormsModule, NgIcon],
  providers: [provideIcons({ lucideMapPin })],
  templateUrl: './login-poli.html',
  styleUrl: './login-poli.scss',
})
export class LoginPoli {

  usuario = '';
  password = '';
  loading = false;
  erro = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (!this.usuario || !this.password) return;

    this.loading = true;
    this.erro = '';

    this.authService.login({ email: this.usuario, password: this.password }).subscribe({
      next: () => {
        this.router.navigate(['/poli']);
      },
      error: () => {
        this.erro = 'Usuário ou senha inválidos.';
        this.loading = false;
      }
    });
  }
}
