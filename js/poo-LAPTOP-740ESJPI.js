
/* POO = PROGRAMAÇÃO ORIENTADA A OBJETOS */
/*

class = possuem caracteristic\s e ocomportamentos comuns a objetos do mesmo tipo 
metodos = são funcões declaradas dentro de uma classe 

* a criacao de um objeto é chamao de instanciacao 
* Atributos = caracteristicas como nome, modelo, titulo, codigo, etc
* Metodos = funcoes que sao associaddas aos objetos - determinam o comportamento do objeto

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Encapsulamento = forma de esconder ou ocultar os dados dde uma classe  =
- permite protegger o acesso aos atributos de um  objeto
- ao inves de acessar um atributo diretamente, é necessario utilizar um metodo para atribuir ou recuperar alguma dado

Herança = forma de aproveitar os atributos de uma classe em outra classe derivada =
-sendo assim uma classe recebe por heranca atributos e metodos de uma outra classe 
*- a classe que passa a heranca para uma outra classe é chamda de SUPERCLASSE 
*- a classe que recebe a heranca é chamada de SUBCLASSE


*/
class Produto {
    #tipo;
    constructor(tipo) {
        this.#tipo = tipo;
    }
    getDados() {
        return this.#tipo
    }
}

/*Ex2:*/
'use strict';

class Livro {
    constructor(pag, titulo) {
        this.livro1 = pag;
        this.livro2 = titulo;
    }
}
let meuLivro = new Livro(222, 'Eleição 2022')
console.log(meuLivro.livro2);

/*Ex3:*/
'use strict';

class Produto1 {
    constructor(produto) {
        this.tipo = produto;
    }
}
const prod = new Produto1('Produto Novo');
console.log(prod.tipo)

/*Ex4*/
'use strict';

class Financiamento {
    valorFinanciamento;
    taxaDeJuros;
    numero;
    constructor(valorFinanciamento,taxaDeJuros,numero) {
        this.valorFinanciamento = valorFinanciamento;
        this.taxaDeJuros = taxaDeJuros;
        this.numero = numero;
    }
} 

const fin = new Financiamento(10000,1,3345);
const fin2 = new Financiamento(30000,2,4789);
console.log(fin);
console.log(fin2);

/*Ex5:*/

'use strict';

class Disciplina{
    codigo;
    nome;
    constructor(codigo, nome){
        this.codigo = codigo;
        this.nome = nome;
    }
}
const d1 = new Disciplina(123,'matemática');
console.log(d1.codigo)


/* Ex6: Aula 13 - Herança - Superclasse e Subclasse */ 

class Dog {
    raca;
    peso;
    constructor(raca, peso) {
        this.raca = raca;
        this.peso = peso;
    }
}

class Racao extends Dog {
    marca;
    quilio;
    constructor(marca, quilo) {
        super()
        this.marca = marca;
        this.quilo = quilo;
    }
}

const mix = new Dog('produtos Comprados' ,'35kg');
const ali = new Racao('Golden' ,22);
console.log(mix);
console.log(ali);

/* Ex6: */
// "liveServer.settings.CustomBrowser": "chrome"