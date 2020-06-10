// 1. Crie uma função utilizando arrow function com dois parâmetros que retorne a soma deles.

// const soma = (a, b) => a + b;
// console.log(soma(2, 4));
// console.log("_________________________");

// 2. Crie uma função chamada retornarBiografia que retorne o objeto abaixo:
// {nome: "Mulheres, raça e classe",
// descrição:"Da mesma forma que gênero é a maneira como a raça é vivida."
// }

// function retornarBiografia(a, b) {
//   return {
//     nome: a,
//     descrição: b,
//   };
// }
// console.log(
//   retornarBiografia(
//     '"Mulheres, raça e classe"',
//     "Da mesma forma que gênero é a maneira como a raça é vivida."
//   )
// );

let retornarBiografia = (nome, descricao) => ({nome, descricao});

console.log(retornarBiografia ('vivi', 'oioi'));
console.log ('________________________');

// 3. Reescreva a função abaixo utilizando
// Arrow Function 

// const objetoUsuario = function (id, nome) {
//     return {
//       id: id,
//      nome: nome
//     }
// }

const objetoUsuario = (id, nome) => ({id: id, nome: nome});
console.log (objetoUsuario(894775, 'vivi'));