//Callback function    chamar de novo a função

function SayMyName(name) {
    console.log('antes de usar a função callback')
    name()
    console.log('depois de usar a callback')
}


SayMyName(     //desse jeito que chama a função
    () =>{
        console.log('estou em uma porra de uma callback')
    }
)