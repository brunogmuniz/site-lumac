import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMapPin } from '@ng-icons/lucide';

@Component({
  selector: 'app-login-poli',
  imports: [CommonModule, FormsModule, NgIcon],
  providers: [
    provideIcons({ lucideMapPin })
  ],
  templateUrl: './login-poli.html',
  styleUrl: './login-poli.scss',
})
export class LoginPoli {
  usuario = '';
  password = '';
  loading = false;

  onSubmit(): void {
    if (!this.usuario || !this.password) return;

    this.loading = true;

    setTimeout(() => {
      console.log('Login:', this.usuario);
      this.loading = false;
    }, 1000);
  }
}
