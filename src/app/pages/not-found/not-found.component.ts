import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-neutral-50">
      <div class="text-center">
        <h1 class="text-9xl font-bold text-neutral-900">404</h1>
        <p class="text-2xl font-semibold text-neutral-700 mt-4">
          Página não encontrada
        </p>
        <p class="text-neutral-600 mt-2">
          O estabelecimento que você procura não existe ou não está disponível.
        </p>
        <a
          routerLink="/"
          class="inline-block mt-6 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
        >
          Voltar para a página inicial
        </a>
      </div>
    </div>
  `
})
export class NotFoundComponent {} 