import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInAnimation, cardHoverAnimation, listAnimation } from '../animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fadeInAnimation, cardHoverAnimation, listAnimation]
})
export class HomeComponent {
  mensagemBoasVindas = '';
  cardHoverState = '';
  
  features = [
    {
      title: 'Desenvolvimento Moderno',
      description: 'Utilize as mais recentes tecnologias e práticas de desenvolvimento web.'
    },
    {
      title: 'Interface Responsiva',
      description: 'Design adaptável para todos os dispositivos e tamanhos de tela.'
    },
    {
      title: 'Alta Performance',
      description: 'Aplicação otimizada para oferecer a melhor experiência ao usuário.'
    }
  ];

  iniciarAplicacao() {
    this.mensagemBoasVindas = 'Bem-vindo! A aplicação foi iniciada com sucesso!';
    setTimeout(() => {
      this.mensagemBoasVindas = '';
    }, 3000);
  }

  onCardHover(index: number) {
    this.cardHoverState = 'hover';
  }

  onCardLeave(index: number) {
    this.cardHoverState = '';
  }
}
