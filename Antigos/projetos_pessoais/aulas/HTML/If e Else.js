// Vamos falar sobre o if e o else, que ajudam nossa aplicação a tomar diferentes caminhos, ou seja, alteram o fluxo da nossa aplicação.

// Sua sintaxe é simples, como pode ver a seguir:

// if (condição) {
//     //apenas será executado o bloco de código caso condição seja true     significa se

// } else {   //esse aqui sempre é o padrão
//   // apenas será executado o bloco de código caso condição do if seja false    significa SE NÂO 

// }


// O exemplo utilizado pelo professor no vídeo é o seguinte, acompanhe para poder visualizar o processo até chegarmos nesse código.

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37     // aqui ele declaro para só chamar dps

if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature) {    // para adicionar um meio termo eles podem ser colocados infinitamente
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}