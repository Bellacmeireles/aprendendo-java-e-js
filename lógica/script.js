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

/*let family = {
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

calculateBalance() */

/* Celsius em fahrenheit

1* Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra 

c = (F - 32) * 5/9
F = C * 9/5 + 32


function transformDegree(degree) {
  const celsiusExist = degree.toUpperCase().includes('C')
  const fahrenheitExist = degree.toUpperCase().includes('F')
  
  // fluxo de erro 
  if(!celsiusExist && !fahrenheitExist) {
    throw new Error('Grau não identificado')
  }

  // esse let form é um EX de "arrow function"
  // fluxo ideal, F -> C /- ou seja, fahrenheit para celsius
  let updatedDegree = Number(degree.toUpperCase().replace("F",""));
  let form = (fahrenheit) => (fahrenheit - 32) * 5/9
  let degreeSign = 'C'

  // fluxo alternativo C -> F /- ou seja, celsius para fahrenheit
  if(celsiusExist) {
    updatedDegree = Number(degree.toUpperCase().replace("C",""));
    form = (celsius) => (celsius * 9/5 + 32)
    degreeSign = 'F'
  }

  return form(updatedDegree) + degreeSign 
}

try {
  console.log(transformDegree('25C'))
  console.log(transformDegree('50F'))
  console.log(transformDegree('50Z'))
  //transformDegree('50Z')
} catch (error) {
  console.log(error.message)
}
*/

/* Buscando e contando dados em array 
Baseado no Array de livros por Categoria abaixo, faça os seguintes desafios

1- Contar o número de categorias e o número de livros em cada categoria

2- Contar o número de autores 

3- Mostrar livros do autor Augusto Cury

4- Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor

const booksByCategory = [
  {
    category: "Riqueza",
    books:[
      { 
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books:[
      { 
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory) {
  console.log('Total de livros da categoria: ', category.category)
  console.log(category.books.length)
}

function countAuthors() {
  let authors = [];

  for(let category of booksByCategory) {
    for(let book of category.books) {
      if(authors.indexOf(book.author) == -1)
      authors.push(book.title)
    }
  }
  console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOfAugustoCury(author) {
  let books = [];

  for(let category of booksByCategory) {
    for(let book of category.books) {
      if(book.author === author) {
        books.push(book.title)
      }
    }
  }
  console.log(`Livros do autor ${author}:  ${books.join(", ")}`)
}

booksOfAugustoCury('Augusto Cury'); */