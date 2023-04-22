//functions scoop   


let subject = 'create video' 
//objeto fora do scoop não é afetado pelo de dentro do scoop

function CreateThink(subject) {
    subject = 'study'
    return subject
    //objeto dentro do scoop não é afetado pelo de fora caso não tenha a palavra (subject) ele ira puxar a outra que esta em cima e o significado
}


console.log(subject)
console.log(CreateThink())
console.log(subject)