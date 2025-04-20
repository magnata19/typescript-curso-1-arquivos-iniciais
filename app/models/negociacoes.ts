import { Negociacao } from "./negociacao";

export class Negociacoes {
  private negociacao: Negociacao[] = [];

  adiciona(negociacao: Negociacao): void {
    this.negociacao.push(negociacao);
  }

  lista(): readonly Negociacao[] {
    return this.negociacao;
  }
} 