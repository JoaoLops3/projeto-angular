import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInAnimation } from '../animations';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
  animations: [fadeInAnimation]
})
export class SobreComponent {
  title = 'Sobre Nós';
  description = 'Esta é uma aplicação Angular moderna com animações e transições suaves.';
}
