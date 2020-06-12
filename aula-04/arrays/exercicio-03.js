// 3. reduce() é um método incrivelmente poderoso que nos permite combinar todo o resultado de uma nova array em um único resultado.

// Vamos utilizar um reduce pra extrair todos os livros do seguinte conjunto de dados:

const dados = [
{
       "nome":"Tawany",
        "livros":[
         "Harry Potter",
         "1984"]
},
{
         "nome":"Suzelen",
          "livros":[
         "Capitões da Areia",
          "Menina bonita do laço de fita"]
}]

// //SAÍDA
// ["Harry Potter", "1984", "Capitões da Areia", "Menina bonita do laço de fita"]
 
const dadosNovos = dados.reduce(function(valorInicial, valorAtual) {
    console.log('valor atual', valorAtual);
    console.log('valor inicial', valorInicial);
    return valorInicial.concat(valorAtual.livros);
}, []);

console.log(dadosNovos);