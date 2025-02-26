// Redeclarações
let nome = "Ander"; // ERRO
const nomeAluno = "Guilherme"; // ERRO

var mensagem = "Olá, Professor!";
console.log(mensagem);
var mensagem = "Olá Aluno!";
console.log(mensagem);

// Reatribuições - Mutabilidade
nome = "Dieguinho";
console.log(nome)

mensagem = "Olá, Diretor!";
console.log(mensagem);

// Tipo const - ERRO

//Hoisting

console.log(segundaMensagem);
var segundaMensagem = "Utilizando Hoisting";
console.log(segundaMensagem);

//console.log(terceiraMensagem);
//let terceiraMensagem = "Olá, sou uma variável LET.";

//console.log(quartaMensagem);
//const quartaMensagem = "Olá, sou uma variável CONST.";

// LET e CONST não fazem HOISTING

//Visibilidade

{
    console.log("Isso é um bloco.");
    let idade = 50;
    const dinheiro = 60;
    console.log(idade);
    console.log(dinheiro);
}

function executar() {
    //instruções dentro da função
    console.log("Dentro da função");
    var numero = 10;
    console.log(numero);
}

executar();