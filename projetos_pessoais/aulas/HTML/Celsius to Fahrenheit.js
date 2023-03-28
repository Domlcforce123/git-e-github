// Nesse desafio faremos uma função que vai receber uma string em Celsius ou Fahrenheit, e fazer a transformação de uma unidade para a outra.

// Desafio:

// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra 
//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32





// transformDegree('50F')

function transformDegree(degree) {
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExist && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    //fluxo ideal. F -> C
    let updatedDegree = Number(degree.toUppercase().replace("F",""));
    let formula = fahrenheit => (fahrenheit - 32) *5/9
    let degreeSign = 'C'


    if(celsiusExist){
        updatedDegree = Number(degree.toUppercase().replace("C",""));
        formula = celsius => celsius *9/5 + 32 
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}
try {
    transformDegree('50F')
    transformDegree('50')


}catch (error) {
    console.log(error)
}