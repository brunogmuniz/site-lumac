import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideMapPin,
  lucideCode,
  lucideBookOpen,
  lucideCloud,
  lucideBrain,
  lucideWorkflow,
  lucideSmartphone
} from '@ng-icons/lucide';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [NgIcon],
  providers: [
    provideIcons({
      lucideCloud,
      lucideBrain,
      lucideWorkflow,
      lucideSmartphone
    })
  ],
  templateUrl: './areas.html',
  styleUrl: './areas.scss',
})
export class Areas {}
