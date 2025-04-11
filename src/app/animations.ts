import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';

// Animação de transição entre páginas
export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'translateY(10px)'
      })
    ], { optional: true }),
    query(':enter', [
      animate('400ms cubic-bezier(0.4, 0, 0.2, 1)', 
        style({ opacity: 1, transform: 'translateY(0)' })
      )
    ], { optional: true }),
    query(':leave', [
      animate('300ms cubic-bezier(0.4, 0, 0.2, 1)', 
        style({ opacity: 0, transform: 'translateY(10px)' })
      )
    ], { optional: true })
  ])
]);

// Animação de entrada para elementos
export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(10px)' }),
    animate('300ms cubic-bezier(0.4, 0, 0.2, 1)', 
      style({ opacity: 1, transform: 'translateY(0)' })
    )
  ])
]);

// Animação de hover para cards
export const cardHoverAnimation = trigger('cardHover', [
  transition(':enter', [
    style({ transform: 'scale(1)' }),
    animate('200ms cubic-bezier(0.4, 0, 0.2, 1)')
  ]),
  transition('* => hover', [
    animate('200ms cubic-bezier(0.4, 0, 0.2, 1)', 
      keyframes([
        style({ transform: 'scale(1)', offset: 0 }),
        style({ transform: 'scale(1.03)', offset: 1 })
      ])
    )
  ]),
  transition('hover => *', [
    animate('200ms cubic-bezier(0.4, 0, 0.2, 1)', 
      keyframes([
        style({ transform: 'scale(1.03)', offset: 0 }),
        style({ transform: 'scale(1)', offset: 1 })
      ])
    )
  ])
]);

// Animação de lista com stagger
export const listAnimation = trigger('listAnimation', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateX(-10px)' }),
      stagger(50, [
        animate('200ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ opacity: 1, transform: 'translateX(0)' })
        )
      ])
    ], { optional: true })
  ])
]); 