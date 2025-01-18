import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterOutlet, NgIf, RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
}) 
export class LayoutComponent {
  showProfileCard = false;
  pageTitle = 'Pedidos em andamento';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateTitle(event.urlAfterRedirects);
      }
    });
  }

  private updateTitle(url: string) {
    switch (url) {
      case '/app':
        this.pageTitle = 'Controle de pedidos';
        break;
      case '/app/novos':
        this.pageTitle = 'Novos pedidos';
        break;
      case '/app/gerenciar-menu':
        this.pageTitle = 'Gerenciar menu';
        break;
      case '/app/historico':
        this.pageTitle = 'Histórico de pedidos';
        break;
      case '/app/entregas':
        this.pageTitle = 'Gerenciar entregas';
        break;
      default:
        this.pageTitle = 'Pedidos em andamento';
    }
  }

  toggleProfileCard() {
    this.showProfileCard = !this.showProfileCard;
  }
}
