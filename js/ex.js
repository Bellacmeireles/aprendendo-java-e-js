 let techs = ["html", "css", "js"]
 // add um item no fim
 techs.push("nodejs")
 // add no começo 
 techs.unshift("sql")
 // remove do fim 
 techs.pop("")
 // remove do começo 
 techs.shift("")
 // pegar somente alguns elementos do array -> console.log(techs.slice(1,3))
 // remove 1 ou mais items em qualquer posição do array 
 //techs.splice(1, 2)
 //encontrar a posição de um elemento no array
 let index = techs.indexOf('css')
 techs.splice(index, 1)

 console.log(techs)

 ///////////////////////////////////////////////////////////////////////////////////

/* expressões e operadores 

- Epressions
- Operators
    Binary
    Unary
    Ternary

new 
* left-hand-side expression
* criar novo objeto
*/
let date = new Date('2022-09-29')
console.log(date);

/* Operdadores unários
   *typeof
   *delete
*/
const person = {
    name: 'Bella',
    age: 18,
}
delete person.age
console.log(person);

/*
O operador de multiplicação é o * (asterisco);

O operador de divisão é a / (barra);

O operador de soma é o + (positivo);

O operador de subtração é o - (negativo).

Outros operadores aritméticos incluem o resto de divisão, incremento, decremento e exponencial, com exemplos a seguir:

/* resto da divisão: sinal % */
let remainder
remainder = 11 % 9
console.log(remainder)

/* incremento: sinal ++ */
let increment = 0

console.log(++increment)
console.log(increment)

/* decremento: sinal -- */
let decrement = 0
decrement--
console.log(decrement)

/* exponencial: sinal ** */
console.log(2 ** 3)

/*
Na matemática, temos uma noção de precedência, onde certos operadores têm de ser realizados primeiro, e não é diferente para um computador, porém, podemos utilizar os parênteses para realizar o agrupamento de alguns operadores, que moverá a precedência do cálculo.*/

let total = 2 + 3 * 5
console.log(total)
//com essa precedência, nosso resultado é 17.

let totall = (2 + 3) * 5
console.log(totall)
// o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.



/*
Operadores de atribuição
Descrição
Veremos nesta aula sobre operadores de atribuição. Quando falamos em atribuição, queremos na verdade dizer assignment, que já vimos bastante, mas podemos também realizar diferentes tipos de atribuição, usando operadores aritméticos.

Exemplos:
*/
// Operadores de atribuição (Assignment)
let x

// assignment normal:
x = 1

// addition assignment (adição):
x += 2

// subtraction assignment (subtração):
x -= 1

// multiplication assignment (multiplacação):
x *= 2

// division assignment (divisão):
x /= 2

// exponetiation assignment (exponenciação):
x **= 2

// remainder assignment (resto de divisão):
x %= 2

/*
Operador condicional ternário
Descrição
Os operadores ternários, conhecidos como operadores de condição, como o nome sugere, são dependentes de condições e podem entregar valores diferentes com base nelas.

Funciona da seguinte forma;

condição ? valor1 : valor2
Exemplo de uso:
*/

// Café da manhã top
let pao = false
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim' /* ?=então '...' / :=se não '...' */
console.log(niceBreakfast)



/*
Falsy e truthy
Descrição
O falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

/*
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN


console.log( NaN ? 'verdadeiro' : 'falso' )
já o truthy é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

/* 
	Todos os valores abaixo seriam representados como false em um boolean.
		true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/
console.log( Infinity ? 'verdadeiro' : 'falso' )

/*
Precedência dos operadores
Descrição
Nesta aula mostraremos a precedência dos operadores, ou seja, a ordem de importância de cada um deles.

// De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 
*/

///////////////////////////////////////////////////////////////////////////////////////////


/*
If e Else
Descrição
Vamos falar sobre o if e o else, que ajudam nossa aplicação a tomar diferentes caminhos, ou seja, alteram o fluxo da nossa aplicação.

Sua sintaxe é simples, como pode ver a seguir:

if (condição) {
    //apenas será executado o bloco de código caso condição seja true
} else {
  // apenas será executado o bloco de código caso condição do if seja false
}
O exemplo utilizado pelo professor no vídeo é o seguinte, acompanhe para poder visualizar o processo até chegarmos nesse código. */

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}


/*
Switch
Descrição
Vamos usar uma declaração chamada switch, que tem um papel muito similar ao if e ao else if, vistos na aula passada, porém a estrutura é bem diferente, e aqui veremos essa estrutura.*/

let expression = ''

switch (expression) { // puxa a expressão para o switch
  case 'a': // confere se o valor da expressão é o correto
    console.log('a')
    break // para a execução do switch apenas se verdadeiro
  case 'b':
    console.log('b')
    break
  default: // caso nenhum valor seja o correto, realizará a 
					 //instrução dentro de si.
    console.log('default')
    break
}
//Temos também a calculadora que o professor construiu no vídeo:

function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2 
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2 
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '%', 8))

/*
Throw e Try/Catch
Descrição

Nesta aula veremos sobre o throw e try/catch. São parte do controle de fluxo da aplicação.

Throw em inglês significa lançar, disparar, catch quer dizer pegar e try tentar.

Isso significa que vamos tentar executar um bloco de código, e se der algum erro, será disparado e capturado na nossa aplicação. Suponhamos que haja uma função que dispare um erro caso não seja passado um parâmetro dessa função.
*/

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}
//Nesse caso, se o nome vier vazio, será disparada uma mensagem.

//Precisamos agora usar o try/catch para capturarmos esse erro, caso contrário, ele irá encerrar nossa aplicação, e nós o faremos da seguinte maneira:

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')
// O try irá executar a função, enquanto o catch vai capturar o erro e atribuir à variável e, que só existe dentro do catch. Após isso, mesmo com o erro, nossa aplicação não será interrompida por completo.


/*
For
Descrição
A estrutura de repetição for tem a seguinte sintaxe:

for(inicialização de uma variável; condição de continuação para o loop; expressão final)
*/
for(let i=0; i > 10; i++) {
    console.log(i)
}
//
let i = 2022
while(i > 10) {
    console.log(i)
}

