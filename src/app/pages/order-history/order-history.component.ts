import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Order } from '../../types/order';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex w-full justify-between gap-2 mb-4">
      <div class="flex gap-2">
        <!-- Filtro por Data -->
        <div class="relative w-52">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i class="fa-regular fa-calendar text-gray-400"></i>
          </div>
          <input
            type="date"
            [(ngModel)]="dataFiltro"
            (ngModelChange)="filtrarPedidos()"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5"
          />
        </div>

        <!-- Filtro por Cliente -->
        <div class="relative w-64">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i class="fa-solid fa-user text-gray-400"></i>
          </div>
          <input
            type="text"
            (input)="onClientNameFilterChange($event)"
            [value]="clientNameFilter"
            placeholder="Cliente"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5"
          />
        </div>
      </div>

      @if (hasFilters) {
        <button
          (click)="clearFilters()"
          class="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors text-sm"
        >
          <i class="fa-solid fa-xmark mr-2"></i>
          Limpar filtros
        </button>
      }
    </div>

    <div class="grid">
      @if (pedidosFiltrados.length > 0) {
        @for (order of pedidosFiltrados; track order.id) {
          <div class="bg-white p-6 border-b border-neutral-200">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-semibold text-neutral-900">
                  Pedido #{{ order.id }}
                </h3>
                <p class="text-neutral-600 mt-1">{{ order.cliente }}</p>
              </div>
              <div class="text-right">
                <p class="text-lg font-semibold text-neutral-900">
                  R$ {{ order.total.toFixed(2) }}
                </p>
                <p class="text-sm text-neutral-500 mt-1">
                  {{ order.data | date:'dd/MM/yyyy HH:mm' }}
                </p>
              </div>
            </div>
          </div>
        }
      } @else {
        <div class="text-center py-8 text-neutral-500">
          Nenhum pedido encontrado com os filtros selecionados.
        </div>
      }
    </div>
  `,
})
export class OrderHistoryComponent {
  dataFiltro: string = '';
  clientNameFilter: string = '';
  
  // Array original de pedidos
  orders: Order[] = [
    {
      id: 1,
      data: new Date(),
      contato: '11999999999',
      cliente: 'João Silva',
      total: 150.00,
      tipoPagamento: 'Cartão',
      local: 'Mesa 5',
      observacao: '',
      estado: 'analise',
      estadoEntrega: 'esperando_entregador',
      menuItens: []
    },
    {
      id: 2,
      data: new Date(Date.now() - 86400000), // Ontem
      contato: '11988888888',
      cliente: 'Maria Santos',
      total: 89.90,
      tipoPagamento: 'Dinheiro',
      local: 'Mesa 3',
      observacao: '',
      estado: 'analise',
      estadoEntrega: 'esperando_entregador',
      menuItens: []
    }
  ];

  // Array de pedidos filtrados
  pedidosFiltrados: Order[] = this.orders;

  onClientNameFilterChange(event: Event) {
    this.clientNameFilter = (event.target as HTMLInputElement).value;
    this.filtrarPedidos();
  }

  filtrarPedidos() {
    this.pedidosFiltrados = this.orders.filter(order => {
      let passouFiltroData = true;
      let passouFiltroCliente = true;

      // Filtro por data
      if (this.dataFiltro) {
        const dataFiltro = new Date(this.dataFiltro);
        const dataPedido = new Date(order.data);
        
        passouFiltroData = 
          dataPedido.getDate() === dataFiltro.getDate() &&
          dataPedido.getMonth() === dataFiltro.getMonth() &&
          dataPedido.getFullYear() === dataFiltro.getFullYear();
      }

      // Filtro por cliente
      if (this.clientNameFilter) {
        passouFiltroCliente = order.cliente
          .toLowerCase()
          .includes(this.clientNameFilter.toLowerCase());
      }

      return passouFiltroData && passouFiltroCliente;
    });
  }

  clearFilters() {
    this.dataFiltro = '';
    this.clientNameFilter = '';
    this.filtrarPedidos();
  }

  get hasFilters(): boolean {
    return this.dataFiltro !== '' || this.clientNameFilter !== '';
  }
} 