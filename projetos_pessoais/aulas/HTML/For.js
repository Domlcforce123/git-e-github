// // A estrutura de repetição for tem a seguinte sintaxe:

// for  (inicialização de uma variável; condição de continuação para o loop; expressão final)

for(let i = 0; i < 10; i++) {
    console.log(i)
}



for(let i = 100; i > 10; i--) {
    console.log(i)
}



for(let i = 10; i > 0; i--) {   // para a execução do loop
    if(i ===5 ) {
        break;
    }


    console.log(i)
}



for(let i = 10; i > 0; i--) {       // pula a execução do momento
    if(i ===5 ) {
        continue;
    }


    console.log(i)
}