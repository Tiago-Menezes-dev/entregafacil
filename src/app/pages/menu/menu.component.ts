import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BusinessHeaderComponent } from '../../components/business-header/business-header.component';
import { MenuListComponent } from "../../components/menu-list/menu-list.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [BusinessHeaderComponent, MenuListComponent, CommonModule, RouterLink],
  templateUrl: "./menu.component.html",
  styleUrl: './menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  estabelecimento = '';
  
  businessList = [
    {
      name: 'Restaurante do Zé',
      slug: 'restaurante-do-ze'
    },
    {
      name: 'Restaurante do João',
      slug: 'restaurante-do-joao'
    },
    {
      name: 'Restaurante do Pedro',
      slug: 'restaurante-do-pedro'
    }
  ];

  constructor(private route: ActivatedRoute) {
    this.estabelecimento = this.route.snapshot.params['estabelecimento'];
  }

  get businessExists(): boolean {
    return this.businessList.some(business => business.slug === this.estabelecimento);
  }
}
