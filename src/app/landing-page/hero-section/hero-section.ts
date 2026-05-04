import {Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection implements AfterViewInit, OnDestroy {
  @ViewChild('typedElement')
  typedElement!: ElementRef;

  private typed!: Typed;

  ngAfterViewInit(): void {
    this.typed = new Typed(
      this.typedElement.nativeElement,
      {
        strings: [
          'Inovação.',
          'Pesquisa.',
          'Tecnologia.',
          'LUMAC.'
        ],
        typeSpeed: 90,
        backSpeed: 40,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      }
    );
  }

  ngOnDestroy(): void {
    if (this.typed) {
      this.typed.destroy();
    }
  }
}
