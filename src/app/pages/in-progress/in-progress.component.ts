import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Order } from '../../types/order';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DatePipe, NgClass]
})
export class InProgressComponent {
  @ViewChild('orderDialog') orderDialog!: ElementRef<HTMLDialogElement>;

  selectedOrder: Order | null = null;
  orderIdFilter: string = '';
  clientNameFilter: string = '';

  orders: Order[] = [
    {
      id: 1001,
      data: new Date('2024-03-20T14:30:00'),
      cliente: 'João Silva',
      contato: '(11) 98765-4321',
      total: 45.90,
      tipoPagamento: 'Cartão de Crédito',
      local: 'Delivery',
      observacao: 'Sem cebola por favor',
      estado: 'analise',
      estadoEntrega: 'esperando_entregador',
      menuItens: [
        {
          codigo: 1,
          nome: 'X-Bacon Especial',
          descricao: 'Hambúrguer artesanal, bacon, queijo, alface e tomate',
          valor: 32.90,
          tipo: 'Lanche',
          editavel: true,
          ingredientes: [
            { nome: 'Bacon', ativo: true },
            { nome: 'Cebola', ativo: false },
            { nome: 'Queijo', ativo: true }
          ],
          adicionais: [
            { nome: 'Bacon Extra', valor: 5.00, quantidade: 1 },
            { nome: 'Queijo Extra', valor: 3.00, quantidade: 1 }
          ]
        }
      ]
    },
    {
      id: 1002,
      data: new Date('2024-03-20T15:15:00'),
      cliente: 'Maria Oliveira',
      contato: '(11) 91234-5678',
      total: 68.80,
      tipoPagamento: 'PIX',
      local: 'Mesa 15',
      observacao: '',
      estado: 'producao',
      estadoEntrega: 'esperando_entregador',
      menuItens: [
        {
          codigo: 2,
          nome: 'Combo Família',
          descricao: '2 burgers + batata + refrigerante 2L',
          valor: 68.80,
          tipo: 'Combo',
          editavel: false,
          ingredientes: [],
          adicionais: []
        }
      ]
    },
    {
      id: 1003,
      data: new Date('2024-03-20T15:45:00'),
      cliente: 'Pedro Santos',
      contato: '(11) 97777-8888',
      total: 29.90,
      tipoPagamento: 'Dinheiro',
      local: 'Delivery',
      observacao: 'Entregar no portão principal',
      estado: 'entrega',
      estadoEntrega: 'esperando_entregador',
      menuItens: [
        {
          codigo: 3,
          nome: 'Pizza Margherita',
          descricao: 'Molho de tomate, mussarela e manjericão',
          valor: 29.90,
          tipo: 'Pizza',
          editavel: true,
          ingredientes: [
            { nome: 'Mussarela', ativo: true },
            { nome: 'Manjericão', ativo: true }
          ],
          adicionais: []
        }
      ]
    },
    {
      id: 1004,
      data: new Date('2024-03-20T16:00:00'),
      cliente: 'Ana Beatriz',
      contato: '(11) 95555-4444',
      total: 25.80,
      tipoPagamento: 'Cartão de Débito',
      local: 'Mesa 7',
      observacao: '',
      estado: 'analise',
      estadoEntrega: 'esperando_entregador',
      menuItens: [
        {
          codigo: 4,
          nome: 'Salada Caesar',
          descricao: 'Alface, frango grelhado, croutons e molho caesar',
          valor: 25.80,
          tipo: 'Salada',
          editavel: true,
          ingredientes: [
            { nome: 'Frango', ativo: true },
            { nome: 'Croutons', ativo: true }
          ],
          adicionais: []
        }
      ]
    },
    {
      id: 1005,
      data: new Date('2024-03-20T16:30:00'),
      cliente: 'Carlos Eduardo',
      contato: '(11) 96666-3333',
      total: 42.70,
      tipoPagamento: 'PIX',
      local: 'Delivery',
      observacao: 'Tomar cuidado com a embalagem',
      estado: 'producao',
      estadoEntrega: 'esperando_entregador',
      menuItens: [
        {
          codigo: 5,
          nome: 'Açaí Bowl',
          descricao: 'Açaí, granola, banana e mel',
          valor: 42.70,
          tipo: 'Sobremesa',
          editavel: true,
          ingredientes: [
            { nome: 'Banana', ativo: true },
            { nome: 'Granola', ativo: true }
          ],
          adicionais: [
            { nome: 'Leite em Pó', valor: 2.00, quantidade: 1 },
            { nome: 'Morango', valor: 3.00, quantidade: 2 }
          ]
        }
      ]
    }
  ];

  get ordersEmAnalise(): Order[] {
    return this.filterOrders(this.orders.filter(order => order.estado === 'analise'));
  }

  get ordersEmProducao(): Order[] {
    return this.filterOrders(this.orders.filter(order => order.estado === 'producao'));
  }

  get ordersProntosEntrega(): Order[] {
    return this.filterOrders(this.orders.filter(order => order.estado === 'entrega'));
  }

  filterOrders(orders: Order[]): Order[] {
    return orders.filter(order => 
      (this.orderIdFilter ? order.id.toString().includes(this.orderIdFilter) : true) &&
      (this.clientNameFilter ? order.cliente.toLowerCase().includes(this.clientNameFilter.toLowerCase()) : true)
    );
  }

  onOrderIdFilterChange(event: Event) {
    this.orderIdFilter = (event.target as HTMLInputElement).value;
  }

  onClientNameFilterChange(event: Event) {
    this.clientNameFilter = (event.target as HTMLInputElement).value;
  }

  openOrderDialog(order: Order) {
    this.selectedOrder = order;
    this.orderDialog.nativeElement.showModal();
  }

  closeOrderDialog() {
    this.orderDialog.nativeElement.close();
  }

  moveOrder(order: Order, targetStage: 'producao' | 'entrega') {
    const index = this.orders.findIndex(o => o.id === order.id);
    if (index !== -1) {
      this.orders[index].estado = targetStage;
      this.closeOrderDialog();
    }
  }

  completeOrder(order: Order) {
    const index = this.orders.findIndex(o => o.id === order.id);
    if (index !== -1) {
      this.closeOrderDialog();
    }
  }

  clearFilters() {
    this.orderIdFilter = '';
    this.clientNameFilter = '';
  }

  get hasFilters(): boolean {
    return this.orderIdFilter !== '' || this.clientNameFilter !== '';
  }
}
