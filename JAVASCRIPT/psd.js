// Obter o formulário de pesquisa e o campo de pesquisa
const pesquisaForm = document.getElementById('pesquisaForm');
const pesquisarInput = document.getElementById('pesquisarInput');

// Adicionar um evento "submit" ao formulário de pesquisa
pesquisaForm.addEventListener('submit', realizarPesquisa);

function realizarPesquisa(event) {
  event.preventDefault(); // Prevenir o envio do formulário

  const termoPesquisa = pesquisarInput.value.trim(); // Obter o valor do campo de pesquisa e remover espaços em branco no início e no final

  if (termoPesquisa === '') {
    alert('Digite algo para pesquisar.'); // Exibir uma mensagem de alerta se o campo de pesquisa estiver vazio
    return;
  }

  const elementos = document.querySelectorAll('.elemento'); // Obter todos os elementos com a classe "elemento"

  let resultadoEncontrado = false; // Flag para verificar se algum resultado foi encontrado

  elementos.forEach(elemento => {
    const titulo = elemento.getAttribute('data-titulo');

    if (titulo.toLowerCase().includes(termoPesquisa.toLowerCase())) {
      elemento.style.display = 'block'; // Exibir o elemento se o título contiver o termo de pesquisa
      resultadoEncontrado = true; // Definir a flag como verdadeira se um resultado for encontrado
    } else {
      elemento.style.display = 'none'; // Ocultar o elemento se o título não contiver o termo de pesquisa
    }
  });

  // Exibir o número de resultados encontrados
  const quantidade = document.getElementById('quantidade');
  if (resultadoEncontrado) {
    quantidade.textContent = `Foram encontrados ${document.querySelectorAll('.elemento:not([style*="display: none"])').length} resultados.`;
    document.getElementById('resultado').classList.remove('hidden');
  } else {
    quantidade.textContent = 'Nenhum resultado encontrado.';
    document.getElementById('resultado').classList.add('hidden');
  }
}


form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (input.value === '') {
    input.classList.add('alerta');
    alert('Digite algo para pesquisar!');
  } else {
    input.classList.remove('alerta');
    // Código para imprimir resultados na tela
  }
});
