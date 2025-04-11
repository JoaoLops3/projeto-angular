import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { routeAnimations } from './animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routeAnimations]
})
export class AppComponent {
  title = 'Meu App Angular';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
