const formulario = document.querySelector(".lista__form");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  /*inserir aqui o código*/

  //pegando os inputs do html e atribuindo às variáveis
  const itemInput = document.getElementById('input-item');
  const valorInput = document.getElementById('input-valor');
  const dataInput = document.getElementById('input-data');

  //criando elementos de tabela para cada novo input criado
  const itemTabela = document.createElement('td');
  const valorTabela = document.createElement('td');
  const dataTabela = document.createElement('td');

  //pegando o valor do input e incluindo dentro do conteúdo do item de tabela td
  itemTabela.textContent = itemInput.value;
  valorTabela.textContent = valorInput.value;
  dataTabela.textContent = dataInput.value;

  //criando uma variável para o elemento tabela
  const tabela = document.querySelector('table');

  //criando um elemento para a linha da tabela
  const linhaTabela = document.createElement('tr');

  //adicionando os itens do input dentro da linha da tabela
  linhaTabela.appendChild(itemTabela);
  linhaTabela.appendChild(valorTabela);
  linhaTabela.appendChild(dataTabela);

  //adicionando a linha da tabela à estrutura master da tabela
  tabela.appendChild(linhaTabela);

  //limpando o input após o submit
  // itemInput.value = '';
  // valorInput.value = '';
  // dataInput.value = '';

  //ou
  formulario.reset();

});