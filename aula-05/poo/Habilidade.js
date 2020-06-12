export class Habilidade {
    constructor (nomePessoa, habilidades){
        this.nomePessoa = nomePessoa;
        this.habilidades = habilidades;
    }
    mostrarHabilidades (){
        console.log('Habilidade: ', this.habilidades);
    }
}