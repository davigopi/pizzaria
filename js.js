// import time from sleep 

var texto0 = "Ola turma"
// alert(texto0)
console.log(texto0)

const texto1 = 'CONST variavel imultavel'
console.log(texto1)

function function1(){
    let texto2 = 'LET variavel restringi local, se dentro do função só funciona dentro da funcao'
    console.log(texto2)
}

async function function2(){
    const texto2 = 'LET posso reutilizar variavel'
    await sleep(1)
    console.log(texto2)
}

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}

function funcao0(){
    // var textoDoUsuario = await prompt("Digitar alguma coisa: ")
    // var textoDoUsuario = prompt("Digitar alguma coisa: ")
    // function2()
}

function1()
// promisse(r => setTimeout(r, 2000))
console.log('texto modelo')
funcao0()

var altura = 2.50
console.log("texto"+ altura.toLocaleString)  // converter o ponto por virgula


function2()

// async function demo() {
//     for (let i = 0; i < 5; i++) {
//         console.log(`Waiting ${i} seconds...`);
//         await sleep(i * 10);
//     }
//     console.log('Done');
// }

// demo();


var soma = 5

var numero = prompt("Digite um número: ")
numero = parseInt(numero)

soma += numero
console.log(`total é: + ${soma}`)