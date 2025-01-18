export type Order = {
    id: number;
    data: Date;
    contato: string;
    cliente: string;
    total: number;
    tipoPagamento: string;
    local: string;
    observacao: string;
    estado: 'analise' | 'producao' | 'entrega';
    estadoEntrega: 'esperando_entregador' | 'a_caminho' | 'entregue';
    menuItens: ItemMenuOrder[];
};

export type ItemMenuOrder = {
    codigo: number;
    nome: string;
    descricao: string;
    valor: number;
    tipo: string;
    editavel: boolean;
    ingredientes: Ingredient[];
    adicionais: AdditionalItem[];
}

export type Ingredient = {
    nome: string;
    ativo: boolean;
};

export type AdditionalItem = {
    nome: string;
    valor: number;
    quantidade: number;
};

;
