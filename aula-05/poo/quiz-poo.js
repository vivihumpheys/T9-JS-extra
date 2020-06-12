// Orientação a Objetos

// 1. Uma empresa de Recrutamento de pessoas Desenvolvedoras, solicitou que fizessemos o programa de seleção de recrutamento. 

// Com isso, eles encaminharam duas modelagens para iniciarmos o projeto e testarmos. 

// A primeira parte foi: Criar uma classe chamada Pessoa, atribuir os parametros e propriedades: Nome, Sobrenome e idade. 
// É necessário que na classe Pessoa, contenha um método para mostrar o nome e sobrenome da pessoa cadastrada.. 

// A segunda parte foi: Criar uma classe chama Habilidade, atribuir os parametros e propriedades: Nome da pessoa e habilidades que ela tem.
// É necessário que na classe Habilidade, contenha um método para mostrar as habilidades da pessoa cadastrada.

// Dicas: 
// Utilize o método construtor, insira os parâmetros e referêncie as propriedades da classe com o this, em seguida atribue os parametros do constructor na propriedade equivalente.

// Exemplo ditado:
// criar operador class NomeClasse
// construtor recebe nome, sobrenome
// nome da classe recebe nome do construtor

class Pessoa {
    constructor (nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        }

        mostrarNome (nome, sobrenome){
            console.log ('Nome: ', this.nome, 'Sobrenome: ', this.sobrenome);
        }
}

class Habilidade {
    constructor (nomePessoa, habilidades){
        this.nomePessoa = nomePessoa;
        this.habilidades = habilidades;
    }
    mostrarHabilidades (habilidades){
        console.log('Habilidade: ', this.habilidades);
    }
}

const novaPessoa = new Pessoa('Viviane', 'Miranda', 27);
const novaHabilidade = new Habilidade ('viviane', 'dançar');


novaPessoa.mostrarNome('Viviane', 'Miranda');
console.log ('_____________________');
novaHabilidade.mostrarHabilidades('dançar');


// 2. Com base no código realizado acima, crie no mínimo duas pessoas e habilidades instanciando as classes de acordo com os seus nomes. 

const outraPessoa = new Pessoa ('Liana', 'Alice', 28);
const outraHabilidade = new Habilidade ('Liana', 'massoterapia');


console.log ('__________________________');
outraPessoa.mostrarNome('Liana', 'Alice');
outraHabilidade.mostrarHabilidades('massoterapia')

