/*let score = 100;
function getScore(score) {
  let scoreA = score >= 90 && score <= 100;
  let scoreB = score >= 80 && score <= 89;
  let scoreC = score >= 70 && score <= 79;
  let scoreD = score >= 60 && score <= 69;
  let scoreE = score < 60 && score >= 0;

  let scoreFinal;

  if (scoreA) {
    scoreFinal = "A";
  } else if (scoreB) {
    scoreFinal = "B";
  } else if (scoreC) {
    scoreFinal = "C";
  } else if (scoreD) {
    scoreFinal = "D";
  } else if (scoreE) {
    scoreFinal = "E";
  } else {
    scoreFinal = "Nota Inválida";
  }

  return scoreFinal;

  console.log(getScore(100));
  console.log(getScore(101));
  console.log(getScore(-1));
  console.log(getScore(0));
  console.log(getScore(1));
  console.log(getScore(10));
  console.log(getScore(45));
  console.log(getScore(60));
  console.log(getScore(61));
  console.log(getScore(75)); 
} */


/*// Sistema de gastos familiar

1* Crie um objeto que posuirá 2 propiedades, ambas do tipo array:
- receitas: []
- despesas: []

2* Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguindo do valor do saldo

anotações -> 
1* nome do objeto: family
nome das 2 propiedades: receitas e despesas 
prop do tipo array: * receitas: [] * despesas: []

2*

*/

let family = {
  receitas: [200, 3120, 250.33, 360.45],
  despesas: [320.34, 128.45, 176.87, 1450.00]
}

function sum(array) {
  let total = 0;
  
  for(let value of array) {
    total += value
  }

  return total
  
}

function calculateBalance() {
  const calculateDespesas = sum(family.despesas) //valor das despesas somadas
  const calculateReceitas = sum(family.receitas) //valor das receitas somadas

  const total = calculateReceitas - calculateDespesas
  const itsOk = total >= 0

  let balanceText = "negativo"
  if (itsOk) {
    balanceText = "positivo"
  } 

  console.log(`Seu saldo é ${balanceText}: R$ ${total}`)

}

calculateBalance()