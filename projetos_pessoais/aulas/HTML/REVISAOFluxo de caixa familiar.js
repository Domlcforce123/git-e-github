// Esse desafio envolve a criação de dois arrays e um função que calculará o resultado desses valores, dizendo se é positivo ou negativo, e após isso, o valor do saldo.

// Desafio:

// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: [] 
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e 
// despesas e irá mostrar uma mensagem se a família está com 
// saldo positivo ou negativo, seguido do valor do saldo.


let Famaly = {
    incomes: [2500, 6000, 999, 700],
    expenses: [2000, 300 , 400 , 900 , 55.99]
}

function sum(array) {
    let total = 0

    for (let value of array) {
        total += value
    }

    return total

}


function calcular () {
    const calculateIncomes = sum(Famaly.incomes)
    const calculateExpenses = sum(Famaly.expenses)

    const total = calculateIncomes - calculateExpenses
    const itsOk = total >= 0
    
    let balanceText = "negativo"


    if (itsOk) {

        balanceText = "positivo"
    }

    console.log(`Seu saldo é de ${balanceText}: ${total}`)


}


calcular()