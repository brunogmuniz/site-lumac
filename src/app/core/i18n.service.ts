import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class I18nService {

  lang = signal('pt');
  data = signal<any>({});

  async setLang(lang: string) {
    this.lang.set(lang);

    const res = await fetch(`/assets/i18n/${lang}.json`);
    this.data.set(await res.json());
  }
}
