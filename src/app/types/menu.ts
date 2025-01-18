export interface Ingrediente {
  nome: string;
  ativo: boolean;
}

export interface Adicional {
  nome: string;
  valor: number;
  quantidade: number;
}

export interface ItemMenu {
  codigo: number;
  nome: string;
  descricao: string;
  valor: number;
  tipo: string;
  editavel: boolean;
  quantidade?: number;
  ingredientes?: Ingrediente[];
  adicionais?: Adicional[];
}