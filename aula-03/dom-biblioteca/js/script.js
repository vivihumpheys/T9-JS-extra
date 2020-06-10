const livros = {
  1: {
    titulo: "Javascript Eloquente",
    quemEscreveu: "Marijn Haverbeke",
    link: "https://github.com/braziljs/eloquente-javascript",
  },
  2: {
    titulo: "Você não sabe JS",
    quemEscreveu: "Kyle Simpson",
    link: "https://github.com/cezaraugusto/You-Dont-Know-JS",
  },
  3: {
    titulo: " Mulheres, raça e classe",
    quemEscreveu: "Angela Davis",
    link:
      "https://edisciplinas.usp.br/pluginfile.php/4248256/mod_resource/content/0/Angela%20Davis_Mulheres%2C%20raca%20e%20classe.pdf",
  },
};

let lista = document.getElementById("lista-do-catalogo");

for (propriedade in livros) {
  const meuLivro = document.createElement("li");
  lista.appendChild(meuLivro);
  meuLivro.classList.add("livro");

  const tituloLivro = document.createElement("h3");
  meuLivro.appendChild(tituloLivro);
  tituloLivro.textContent = livros[propriedade].titulo;
  tituloLivro.classList.add("livro__titulo");

  meuLivro.textContent = livros[propriedade];

  lista.classList.add()

}
