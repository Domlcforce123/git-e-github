class Arvore {

    constructor() {
        this .nos ={}
    }


inserir(arvore, valor) {
    if (arvore, valor) {
        if(valor > arvore.valor) {
            this.inserir(arvore.direita, valor)

        } else {
            this.inserir(arvore.esquerda, valor)
        }
        }else{
        arvore.valor = valor
        arvore.direita = {}
        arvore.esquerda = {}
        }
    }
}

const novaArvore = new Arvore( );
novaArvore.inserir(novaArvore.nos, 23);
novaArvore.inserir(novaArvore.nos, 12);
novaArvore.inserir(novaArvore.nos, 4);
novaArvore.inserir(novaArvore.nos, 18);
novaArvore.inserir(novaArvore.nos, 1);
novaArvore.inserir(novaArvore.nos, 27);
novaArvore.inserir(novaArvore.nos, 25);