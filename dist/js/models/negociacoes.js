export class Negociacoes {
    constructor() {
        this.negociacao = [];
    }
    adiciona(negociacao) {
        this.negociacao.push(negociacao);
    }
    lista() {
        return this.negociacao;
    }
}
