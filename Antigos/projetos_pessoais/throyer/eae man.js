console.log('main.js')
debugger
var number =  ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae repellat ea adipisci non voluptas ab nobis ipsa quod rem, consequuntur ex unde impedit alias, ullam reprehenderit odit qui. Voluptates, doloremque.', "a",'b','c','d','d','q',3]

var CERTO = []

for (let index = 0; index < number.length; index++) {
    var cu = number[index]
    var cusurtado = 3 
    if(cu % 2 != 0 && typeof cu == 'number'){
        CERTO.push(cu)
    }
}
// console.log(CERTO) 
number = ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae repellat ea adipisci non voluptas ab nobis ipsa quod rem, consequuntur ex unde impedit alias, ullam reprehenderit odit qui. Voluptates, doloremque.', "a",'b','c','d','d','q',3]
var cusovado = number.filter(elemento => elemento % 2 != 0)
console.log(cusovado)
debugger
