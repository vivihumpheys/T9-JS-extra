// 1. Escreva uma função chamada compararNumero que receberá dois parâmetros,
// em seguida, retorne o número que for maior.

// O retorno deverá conter essa mensagem:

// "O maior número entre 5 e 10 é 10"

// Passo a passo da função:
// - Criar função compararValor(parametro1, parametro2)
// - Inserir uma condição onde parametro1 é maior que parametro dois?
// - Se a condição for verdadeira, retornar "O maior número entre 5 e 10 é 10"
// - Se for falsa, retornar que a segundo parametro é maior que o primeiro.

function compararNumero(a, b) {
  if (a > b) {
    return `O maior número entre ${a} e ${b} é ${a}.`;
  } else {
    return `O maior número entre ${a} e ${b} é ${b}.`;
  }
}

console.log(compararNumero(3, 9));
console.log(compararNumero(10, 2));
console.log("_____________________");

// 2. Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:

// A função deve retornar com as seguintes notas:
// Se a pontuação for maior que 90, retornar: "A"
// Se a pontuação for maior que 80, retornar: "B"
// Se a pontuação for maior que 70, retornar: "C"
// Se a pontuação for maior que 65, retornar: "D"
// ou "F"

function retornarNota(pontuacao) {
  if (pontuacao >= 90) {
    return console.log("Sua nota é A");
  } else if (pontuacao >= 80) {
    return console.log("Sua nota é B");
  } else if (pontuacao >= 70) {
    return console.log("Sua nota é C");
  } else if (pontuacao >= 65) {
    return console.log("Sua nota é D");
  } else {
    return console.log("Sua nota é F");
  }
}

retornarNota(78);
console.log("____________________");

// 3. Crie uma estrutura switch case na qual armazene o dia da semana
// em que estamos em uma variável auxiliadora.

// Você precisará de uma variável para armazenar,
// durante os cases, o dia da semana.

// Cada dia da semana pode ser um valor:

//    0        1       2      3       4       5      6
// dom   seg   ter  quar quin  sext  sab

// Para você conseguir pegar a data de hoje,
// utilize o (new Date().getDay()) como parâmetro.

// Onde
// case 0:
// diaSemana = "Domingo";
// break;
// case 1:
// ...

const diaHoje = new Date().getDay();

switch (diaHoje) {
  case 0:
    console.log("Hoje é domingo");
    break;
  case 1:
    console.log("Hoje é segunda");
    break;
  case 2:
    console.log("Hoje é terça");
    break;
  case 3:
    console.log("Hoje é quarta");
    break;
  case 4:
    console.log("Hoje é quinta");
    break;
  case 5:
    console.log("Hoje é sexta");
    break;
  case 6:
    console.log("Hoje é sábado");
    break;
}
console.log('_____________________');


//   4. Plano de Viagem:

// Na Agência Turismo é viver, existem alguns planos
// de viagens de acordo com a idade da pessoa.

// A tabela é:

// PLANO TEEN: A partir de 12 anos até 17 anos.
// PLANO PROFISSIONAL: A partir de 18 anos até 29 anos.
// PLANO EXPERIENTE: A partir de 30 anos.

// Faça uma função chamada obterPlanos que receba apenas um parâmetro
// e insira essas condições dentro da função.

// Se não inserirem um valor de acordo com as idades,
// é para retornar: Entrar em contato com a agência de turismo.

// Aqui você pode utilizar:
// If/ else if

// A saída deverá ser algo parecido com:

// obterPlano(12) //SAÍDA: Você pode verificar os nossos pacotes TEEN.

function obterPlano(idade){
    if(idade>=12 && idade <=17){
      return console.log ('Você pode verificar o nosso plano TEEN.');
    } else if (idade>=18 && idade<=29){
        return console.log ('Você pode verificar o nosso plano PROFISSIONAL.');
    } else if (idade>=30){
        return console.log ('Você pode verificar o nosso plano EXPERIENTE.');
    } else {
        return console.log ('Entrar em contato com a agência de turismo.');
    }
}

obterPlano(27);
obterPlano(11);
obterPlano(90);
obterPlano(12);