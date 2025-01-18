import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Order } from '../../types/order';

@Component({
  selector: 'app-manage-delivery',
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
            (ngModelChange)="filtrarEntregas()"
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
      @if (entregasFiltradas.length > 0) {
        @for (order of entregasFiltradas; track order.id) {
          <div class="bg-white p-6 border-b border-neutral-200">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-semibold text-neutral-900">
                  Pedido #{{ order.id }}
                </h3>
                <p class="text-neutral-600 mt-1">{{ order.cliente }}</p>
                <div class="mt-2">
                  @switch (order.estadoEntrega) {
                    @case ('esperando_entregador') {
                      <span class="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-full">
                        Esperando entregador
                      </span>
                    }
                    @case ('a_caminho') {
                      <span class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                        A caminho
                      </span>
                    }
                    @case ('entregue') {
                      <span class="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                        Entregue
                      </span>
                    }
                  }
                </div>
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
          Nenhuma entrega encontrada com os filtros selecionados.
        </div>
      }
    </div>
  `,
})
export class ManageDeliveryComponent {
  dataFiltro: string = '';
  clientNameFilter: string = '';
  
  // Array de exemplo com entregas
  entregas: Order[] = [
    {
      id: 1,
      data: new Date(),
      contato: '11999999999',
      cliente: 'João Silva',
      total: 150.00,
      tipoPagamento: 'Cartão',
      local: 'Rua das Flores, 123',
      observacao: '',
      estado: 'entrega',
      estadoEntrega: 'esperando_entregador',
      menuItens: []
    },
    {
      id: 2,
      data: new Date(),
      contato: '11988888888',
      cliente: 'Maria Santos',
      total: 89.90,
      tipoPagamento: 'Dinheiro',
      local: 'Av. Principal, 456',
      observacao: '',
      estado: 'entrega',
      estadoEntrega: 'a_caminho',
      menuItens: []
    }
  ];

  entregasFiltradas: Order[] = this.entregas;

  onClientNameFilterChange(event: Event) {
    this.clientNameFilter = (event.target as HTMLInputElement).value;
    this.filtrarEntregas();
  }

  filtrarEntregas() {
    this.entregasFiltradas = this.entregas.filter(order => {
      let passouFiltroData = true;
      let passouFiltroCliente = true;

      if (this.dataFiltro) {
        const dataFiltro = new Date(this.dataFiltro);
        const dataPedido = new Date(order.data);
        
        passouFiltroData = 
          dataPedido.getDate() === dataFiltro.getDate() &&
          dataPedido.getMonth() === dataFiltro.getMonth() &&
          dataPedido.getFullYear() === dataFiltro.getFullYear();
      }

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
    this.filtrarEntregas();
  }

  get hasFilters(): boolean {
    return this.dataFiltro !== '' || this.clientNameFilter !== '';
  }
} 