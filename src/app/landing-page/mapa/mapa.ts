import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mapa',
  imports: [CommonModule],
  templateUrl: './mapa.html',
  styleUrl: './mapa.scss',
})
export class Mapa {
  readonly lat = -29.72222138129757;
  readonly lng = -53.717912852346856;

  mapLoading = true;

  readonly googleMapsUrl = `https://www.google.com/maps?q=${this.lat},${this.lng}`;

  readonly mapEmbedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url = `https://maps.google.com/maps?q=${this.lat},${this.lng}&z=16&output=embed&hl=pt-BR`;
    this.mapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
