// Esse exercício vai trabalhar a transformação de notas escolares, onde devemos criar um algoritmo para transformar notas númericas em notas de caracteres.

// Desafio:

// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

let notas = 1

function getScore(nota) {
    let NotaA = nota >= 90 && nota <= 100
    let NotaB = nota >= 80 && nota <= 89 
    let NotaC = nota >= 70 && nota <= 79 
    let NotaD = nota >= 60 && nota <= 69
    let NotaF = nota < 60 && nota >= 0

    let NotaFinal;

    if (NotaA) {                                             // IF SÒ ACEITA BOOLEAN ANIMAL!
        NotaFinal = "Parabens tirou A !"
    }else if (NotaB) {
        NotaFinal = "quase la em animal tirou B!"
    }else if (NotaC) {
        NotaFinal =  "B em só que não, tirou C! "
    }else if (NotaD) {
        NotaFinal = "tirou A !!!.... sqn... muito burro para isso, tirou D"
    }else if (NotaF) {
        NotaFinal = "SAI DA SALA AGORA ANIMAL !!! F"
    } else {
        NotaFinal =  "Nota invalida !"
    }
    return NotaFinal
}


console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(1))
console.log(getScore(10))
console.log(getScore(45))
console.log(getScore(60))
console.log(getScore(61))
console.log(getScore(71))
console.log(getScore(91))
console.log(getScore(81))