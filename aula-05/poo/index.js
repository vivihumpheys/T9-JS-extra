// 3. Após executar as perguntas acima, você precisa organizar esses arquivos, né?

// Sendo assim, separe os arquivos de acordo com o seu nome, inclua o export na classes e importe-a para o index, deixando todos os seus testes apenas no index.

// Exemplo:

// MinhaClasse.js > exportar a classe MinhaClasse{....}

// index.js > importar a classe { MinhaClasse } do local './MinhaClasse'

import { Pessoa } from "./Pessoa.js";
import { Habilidade } from "./Habilidade.js";

const novaPessoa = new Pessoa("Viviane", "Miranda", 27);
const novaHabilidade = new Habilidade("viviane", "dançar");

novaPessoa.mostrarNome();
novaHabilidade.mostrarHabilidades();

const outraPessoa = new Pessoa("Liana", "Alice", 28);
const outraHabilidade = new Habilidade("Liana", "massoterapia");

console.log("__________________________");
outraPessoa.mostrarNome();
outraHabilidade.mostrarHabilidades();
