/*
            Função construtora 

            *expressão new
            *criar um novo objeto
            *this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function(){
        return 'está andando'
    }
}

const dom = new Person("Dom")
const JOao = new Person("JOao")

console.log(dom.walk())
console.log(JOao.walk())