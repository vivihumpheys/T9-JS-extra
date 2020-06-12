export class Pessoa {
    constructor (nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        }

        mostrarNome (){
            console.log ('Nome: ', this.nome, 'Sobrenome: ', this.sobrenome);
        }
}
