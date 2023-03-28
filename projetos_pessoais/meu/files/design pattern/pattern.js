function fabricarPessoa (nome, sobrenome) {
    let pessoa ={};
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;

    function nomeCompleto() {
        return `${pessoa.nome} ${pessoa.sobrenome}`;
    }

    pessoa.nomeCompleto = nomeCompleto;

    return pessoa;
}

