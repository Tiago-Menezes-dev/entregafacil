import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemMenu } from '../../types/menu';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-manage-menu',
  templateUrl: './manage-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgClass]
})
export class ManageMenuComponent {
  codigoFilter: string = '';
  nomeFilter: string = '';

  menuItems: ItemMenu[] = [
    {
      codigo: 1,
      nome: 'X-Bacon Especial',
      descricao: 'Hambúrguer artesanal, bacon, queijo, alface e tomate',
      valor: 32.90,
      tipo: 'Lanche',
      editavel: true,
      ingredientes: [
        { nome: 'Bacon', ativo: true },
        { nome: 'Queijo', ativo: true }
      ]
    },
    {
      codigo: 2,
      nome: 'Combo Família',
      descricao: '2 burgers + batata + refrigerante 2L',
      valor: 68.80,
      tipo: 'Combo',
      editavel: false
    },
    {
      codigo: 3,
      nome: 'Pizza Margherita',
      descricao: 'Molho de tomate, mussarela e manjericão',
      valor: 29.90,
      tipo: 'Pizza',
      editavel: true
    },
    {
      codigo: 4,
      nome: 'Salada Caesar',
      descricao: 'Alface, frango grelhado, croutons e molho caesar',
      valor: 25.80,
      tipo: 'Salada',
      editavel: true
    },
    {
      codigo: 5,
      nome: 'Açaí Bowl',
      descricao: 'Açaí, granola, banana e mel',
      valor: 42.70,
      tipo: 'Sobremesa',
      editavel: true
    }
  ];

  get filteredItems(): ItemMenu[] {
    return this.menuItems.filter(item => 
      (this.codigoFilter ? item.codigo.toString().includes(this.codigoFilter) : true) &&
      (this.nomeFilter ? item.nome.toLowerCase().includes(this.nomeFilter.toLowerCase()) : true)
    );
  }

  onCodigoFilterChange(event: Event) {
    this.codigoFilter = (event.target as HTMLInputElement).value;
  }

  onNomeFilterChange(event: Event) {
    this.nomeFilter = (event.target as HTMLInputElement).value;
  }

  toggleEditavel(item: ItemMenu) {
    item.editavel = !item.editavel;
  }

  clearFilters() {
    this.codigoFilter = '';
    this.nomeFilter = '';
  }

  get hasFilters(): boolean {
    return this.codigoFilter !== '' || this.nomeFilter !== '';
  }
} 