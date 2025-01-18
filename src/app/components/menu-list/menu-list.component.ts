import { NgClass } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { ionSend } from '@ng-icons/ionicons';
import { PhoneMaskDirective } from '../../directives/phone-mask.directive';
import { Adicional, ItemMenu } from '../../types/menu';
import { CurrencyPipe } from '../../directives/currency.pipe';

@Component({
  selector: 'app-menu-list',
  imports: [NgClass, PhoneMaskDirective, CurrencyPipe],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css',
  viewProviders: [provideIcons({ ionSend })],
})
export class MenuListComponent {
  #cdr = inject(ChangeDetectorRef);

  menu: ItemMenu[] = [
    // 10 tipos de Hambúrgueres
    {
      codigo: 1,
      nome: 'X-Tudo',
      descricao: 'Hambúrguer completo com bacon e queijo cheddar',
      valor: 15.0,
      tipo: 'Hamburger',
      editavel: true,
      ingredientes: [
        { nome: 'Pão', ativo: true },
        { nome: 'Hambúrguer', ativo: true },
        { nome: 'Queijo Cheddar', ativo: true },
        { nome: 'Bacon', ativo: true },
        { nome: 'Alface', ativo: true },
        { nome: 'Tomate', ativo: true },
        { nome: 'Cebola', ativo: true },
        { nome: 'Maionese', ativo: true },
      ],
    },
    {
      codigo: 2,
      nome: 'X-Bacon',
      descricao: 'Hambúrguer com bacon e maionese especial',
      valor: 14.0,
      tipo: 'Hamburger',
      editavel: true,
      ingredientes: [
        { nome: 'Pão', ativo: true },
        { nome: 'Hambúrguer', ativo: true },
        { nome: 'Queijo', ativo: true },
        { nome: 'Bacon', ativo: true },
        { nome: 'Maionese', ativo: true },
      ],
    },
    {
      codigo: 3,
      nome: 'X-Salada',
      descricao: 'Hambúrguer com salada e queijo',
      valor: 13.0,
      tipo: 'Hamburger',
      editavel: true,
      ingredientes: [
        { nome: 'Pão', ativo: true },
        { nome: 'Hambúrguer', ativo: true },
        { nome: 'Queijo', ativo: true },
        { nome: 'Alface', ativo: true },
        { nome: 'Tomate', ativo: true },
        { nome: 'Cebola', ativo: true },
        { nome: 'Maionese', ativo: true },
      ],
    },
    {
      codigo: 4,
      nome: 'X-Frango',
      descricao: 'Hambúrguer de frango grelhado',
      valor: 12.0,
      tipo: 'Hamburger',
      editavel: true,
      ingredientes: [
        { nome: 'Pão', ativo: true },
        { nome: 'Frango', ativo: true },
        { nome: 'Queijo', ativo: true },
        { nome: 'Alface', ativo: true },
        { nome: 'Tomate', ativo: true },
        { nome: 'Cebola', ativo: true },
        { nome: 'Maionese', ativo: true },
      ],
    },
    {
      codigo: 5,
      nome: 'X-Egg',
      descricao: 'Hambúrguer com ovo frito',
      valor: 14.5,
      tipo: 'Hamburger',
      editavel: true,
      ingredientes: [
        { nome: 'Pão', ativo: true },
        { nome: 'Hambúrguer', ativo: true },
        { nome: 'Ovo', ativo: true },
        { nome: 'Queijo', ativo: true },
        { nome: 'Bacon', ativo: true },
        { nome: 'Maionese', ativo: true },
      ],
    },
    {
      codigo: 6,
      nome: 'X-Vegano',
      descricao: 'Hambúrguer vegano com vegetais',
      valor: 16.0,
      tipo: 'Hamburger',
      editavel: true,
      ingredientes: [
        { nome: 'Pão', ativo: true },
        { nome: 'Hambúrguer Vegano', ativo: true },
        { nome: 'Alface', ativo: true },
        { nome: 'Tomate', ativo: true },
        { nome: 'Cebola', ativo: true },
        { nome: 'Maionese Vegana', ativo: true },
      ],
    },
    {
      codigo: 7,
      nome: 'X-Picanha',
      descricao: 'Hambúrguer de picanha com molho especial',
      valor: 18.0,
      tipo: 'Hamburger',
      editavel: true,
      ingredientes: [
        { nome: 'Pão', ativo: true },
        { nome: 'Picanha', ativo: true },
        { nome: 'Queijo', ativo: true },
        { nome: 'Bacon', ativo: true },
        { nome: 'Molho Especial', ativo: true },
      ],
    },
    {
      codigo: 8,
      nome: 'X-Calabresa',
      descricao: 'Hambúrguer de calabresa defumada',
      valor: 14.5,
      tipo: 'Hamburger',
      editavel: true,
      ingredientes: [
        { nome: 'Pão', ativo: true },
        { nome: 'Calabresa', ativo: true },
        { nome: 'Queijo', ativo: true },
        { nome: 'Cebola', ativo: true },
        { nome: 'Maionese', ativo: true },
      ],
    },
    {
      codigo: 9,
      nome: 'X-Costela',
      descricao: 'Hambúrguer de costela bovina',
      valor: 19.0,
      tipo: 'Hamburger',
      editavel: true,
      ingredientes: [
        { nome: 'Pão', ativo: true },
        { nome: 'Costela Bovina', ativo: true },
        { nome: 'Queijo', ativo: true },
        { nome: 'Bacon', ativo: true },
        { nome: 'Molho BBQ', ativo: true },
      ],
    },
    {
      codigo: 10,
      nome: 'X-Chef',
      descricao: 'Hambúrguer gourmet especial do chef',
      valor: 20.0,
      tipo: 'Hamburger',
      editavel: true,
      ingredientes: [
        { nome: 'Pão', ativo: true },
        { nome: 'Hambúrguer', ativo: true },
        { nome: 'Queijo', ativo: true },
        { nome: 'Bacon', ativo: true },
        { nome: 'Ovo', ativo: true },
        { nome: 'Molho Especial', ativo: true },
      ],
    },

    // 5 tipos de Bebidas
    {
      codigo: 11,
      nome: 'Refrigerante Lata',
      descricao: 'Escolha entre Coca-Cola, Sprite ou Guaraná',
      valor: 5.0,
      tipo: 'Bebida',
      editavel: false,
    },
    {
      codigo: 12,
      nome: 'Suco Natural',
      descricao: 'Suco natural de laranja ou limão',
      valor: 7.0,
      tipo: 'Bebida',
      editavel: false,
    },
    {
      codigo: 13,
      nome: 'Água Mineral',
      descricao: 'Água sem gás 500ml',
      valor: 3.0,
      tipo: 'Bebida',
      editavel: false,
    },
    {
      codigo: 14,
      nome: 'Chá Gelado',
      descricao: 'Chá gelado sabor pêssego ou limão',
      valor: 6.0,
      tipo: 'Bebida',
      editavel: false,
    },
    {
      codigo: 15,
      nome: 'Cerveja',
      descricao: 'Cerveja long neck gelada',
      valor: 8.0,
      tipo: 'Bebida',
      editavel: false,
    },

    // 4 tipos de Sobremesas
    {
      codigo: 16,
      nome: 'Pudim',
      descricao: 'Pudim de leite condensado caseiro',
      valor: 6.0,
      tipo: 'Sobremesa',
      editavel: false,
    },
    {
      codigo: 17,
      nome: 'Torta de Limão',
      descricao: 'Fatias de torta com creme de limão',
      valor: 8.0,
      tipo: 'Sobremesa',
      editavel: false,
    },
    {
      codigo: 18,
      nome: 'Brownie',
      descricao: 'Brownie de chocolate com nozes',
      valor: 7.0,
      tipo: 'Sobremesa',
      editavel: false,
    },
    {
      codigo: 19,
      nome: 'Sorvete',
      descricao: '2 bolas de sorvete à escolha',
      valor: 5.0,
      tipo: 'Sobremesa',
      editavel: false,
    },

    // 4 tipos de Petiscos
    {
      codigo: 20,
      nome: 'Batata Frita',
      descricao: 'Porção de batata frita crocante',
      valor: 10.0,
      tipo: 'Petisco',
      editavel: true,
    },
    {
      codigo: 21,
      nome: 'Coxinha',
      descricao: 'Coxinhas de frango por porção',
      valor: 8.0,
      tipo: 'Petisco',
      editavel: false,
    },
    {
      codigo: 22,
      nome: 'Bolinho de Bacalhau',
      descricao: 'Bolinho de bacalhau crocante',
      valor: 12.0,
      tipo: 'Petisco',
      editavel: false,
    },
    {
      codigo: 23,
      nome: 'Pastelzinho',
      descricao: 'Pastéis de carne e queijo',
      valor: 9.0,
      tipo: 'Petisco',
      editavel: false,
    },
  ];

  selectedMenuItems: any[] = [];

  selectedTab: string = '';
  unicTypes: string[] = [];
  itensFiltrados: ItemMenu[] = [];

  changingFilter = signal(false);
  editingContact = signal(false);
  editingItem = signal<ItemMenu | null>(null);
  orderValue = signal('R$ 0,00');
  adding = false;

  ingredientesAdicionaveis: Adicional[] = [
    { nome: 'Bacon Extra', valor: 3.0, quantidade: 0 },
    { nome: 'Queijo Extra', valor: 2.5, quantidade: 0 },
    { nome: 'Ovo', valor: 2.0, quantidade: 0 },
    { nome: 'Cebola Caramelizada', valor: 2.5, quantidade: 0 },
    { nome: 'Molho Extra', valor: 1.5, quantidade: 0 },
    { nome: 'Cheddar', valor: 3.0, quantidade: 0 },
    { nome: 'Calabresa', valor: 3.5, quantidade: 0 },
  ];

  @ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('drawer') drawer!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.inputElement.nativeElement.focus();
  }

  ngOnInit(): void {
    this.menu.forEach((item) => {
      item.quantidade = 0;
      if (item.editavel) {
        item.adicionais = [];
      }
    });
    this.unicTypes = [...new Set(this.menu.map((item) => item.tipo))];
    this.selectedTab = this.unicTypes[0];
    this.filtrarItens();
  }

  selecionarAba(tipo: string): void {
    this.selectedTab = tipo;
    this.filtrarItens();
  }

  startEditing() {
    this.editingContact.set(true);
    setTimeout(() => {
      if (this.inputElement) {
        this.inputElement.nativeElement.focus();
      }
    }, 0);
  }

  openEditCard(item: ItemMenu) {
    // Reset quantities of adicionais
    this.ingredientesAdicionaveis.forEach((adicional) => {
      adicional.quantidade = 0;
    });

    // If item has existing adicionais, set their quantities
    if (item.adicionais && item.adicionais.length > 0) {
      item.adicionais.forEach((adicional) => {
        const existingAdicional = this.ingredientesAdicionaveis.find(
          (a) => a.nome === adicional.nome
        );
        if (existingAdicional) {
          existingAdicional.quantidade = adicional.quantidade;
        }
      });
    }

    this.editingItem.set(item);
    this.closeDialog();
  }

  addAdicional(adicional: Adicional) {
    adicional.quantidade++;
    const item = this.editingItem();
    if (item) {
      if (!item.adicionais) {
        item.adicionais = [];
      }
      
      // Find if this adicional already exists in the item
      const existingAdicional = item.adicionais.find(a => a.nome === adicional.nome);
      if (existingAdicional) {
        existingAdicional.quantidade = adicional.quantidade;
      } else {
        // Add new adicional to the item
        item.adicionais.push({
          nome: adicional.nome,
          valor: adicional.valor,
          quantidade: adicional.quantidade
        });
      }
    }
  }

  removeAdicional(adicional: Adicional) {
    if (adicional.quantidade > 0) {
      adicional.quantidade--;
      const item = this.editingItem();
      if (item && item.adicionais) {
        const existingAdicional = item.adicionais.find(a => a.nome === adicional.nome);
        if (existingAdicional) {
          existingAdicional.quantidade = adicional.quantidade;
          // Remove the adicional if quantity is 0
          if (adicional.quantidade === 0) {
            item.adicionais = item.adicionais.filter(a => a.nome !== adicional.nome);
          }
        }
      }
    }
  }

  closeEditCard() {
    this.editingItem.set(null);
    this.openDialog();
  }

  finishEditingAndClose() {
    this.editingItem.set(null);
    this.openDialog();
  }

  toggleIngredient(ingrediente: any) {
    ingrediente.ativo = !ingrediente.ativo;
  }

  filtrarItens(): void {
    this.itensFiltrados = this.menu.filter(
      (item) => item.tipo === this.selectedTab
    );
  }

  openDialog() {
    this.selectedMenuItems = this.groupItemsByType(
      this.returnSelectedItems(this.menu)
    );
    const dialog = document.getElementById('customDialog') as HTMLDialogElement;
    if (dialog) dialog.showModal();
  }

  closeDialog() {
    const dialog = document.getElementById('customDialog') as HTMLDialogElement;
    if (dialog) dialog.close();
  }

  confirmAction() {
    console.log(this.selectedMenuItems)
    this.closeDialog();
  }

  add(item: ItemMenu) {
    item.quantidade = (item.quantidade || 0) + 1;
    this.orderValue.set(this.calcOrderValue(this.menu));
  }

  remove(item: ItemMenu) {
    if (item.quantidade && item.quantidade > 0) {
      item.quantidade--;
      this.orderValue.set(this.calcOrderValue(this.menu));
    }
  }

  clearMenu() {
    this.menu.forEach((item) => (item.quantidade = 0));
    this.orderValue.set(this.calcOrderValue(this.menu));
  }

  hasItems(): boolean {
    return this.menu.some((item) => item.quantidade && item.quantidade > 0);
  }

  calcOrderValue(lista: ItemMenu[]): string {
    const total = lista.reduce(
      (total, item) => total + item.valor * (item.quantidade ?? 1),
      0
    );

    // Formatação para moeda brasileira
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(total);
  }

  returnSelectedItems(menu: ItemMenu[]) {
    if (!Array.isArray(menu)) {
      throw new Error('O argumento deve ser uma lista.');
    }
    // Retorna itens onde a quantidade é maior que 0
    return menu.filter((item) => item.quantidade && item.quantidade > 0);
  }

  expandItemList(items: ItemMenu[]): ItemMenu[] {
    return items.flatMap((item) => {
      if (item.editavel) {
        const quantity = item.quantidade || 1; // Se quantidade não for definida, assume 1
        return Array.from({ length: quantity }, () => ({
          ...item,
          quantidade: undefined, // Remove o campo "quantidade" dos itens retornados
        }));
      }
      return [item]; // Retorna o item original se não for editável
    });
  }

  groupItemsByType(items: ItemMenu[]): { tipo: string; itens: ItemMenu[] }[] {
    const expandedItems = this.expandItemList(items); // Expande os itens conforme necessário

    const grouped = expandedItems.reduce((acc, item) => {
      const group = acc.find((g) => g.tipo === item.tipo);
      if (group) {
        group.itens.push(item);
      } else {
        acc.push({ tipo: item.tipo, itens: [item] });
      }
      return acc;
    }, [] as { tipo: string; itens: ItemMenu[] }[]);

    return grouped;
  }
}
