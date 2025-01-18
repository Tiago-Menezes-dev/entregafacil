import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {
  transform(value: any, currencyCode: string = 'BRL', locale: string = 'pt-BR'): string | null {
    if (value == null || isNaN(value)) return null;

    // Converte para número e formata como moeda com o código da moeda
    const formattedValue = parseFloat(value).toLocaleString(locale, {
      style: 'currency',
      currency: currencyCode,  // Usa o código de moeda (BRL, USD, etc.)
      minimumFractionDigits: 2,
    });

    return formattedValue;
  }
}
