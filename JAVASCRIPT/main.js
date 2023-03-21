const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
event.preventDefault();

// Obtém o valor do campo de pesquisa e do menu suspenso
const valorPesquisa = document.querySelector('#pesquisarInput').value.toLowerCase().trim();
const tipoArquivo = document.querySelector('#tipoArquivo').value;

// Realiza a pesquisa e exibe os resultados
pesquisarArquivos(valorPesquisa, tipoArquivo);
});

function pesquisarArquivos(valorPesquisa, tipoArquivo) {
const elementos = document.querySelectorAll('.elemento');
const resultado = document.getElementById('resultado');

let contador = 0;

elementos.forEach(elemento => {
  const tipoElemento = elemento.getAttribute('data-tipo');
  const tituloElemento = elemento.getAttribute('data-titulo').toLowerCase();
  
  if (tipoElemento === tipoArquivo && tituloElemento.includes(valorPesquisa)) {
    elemento.style.display = 'block';
    contador++;
  } else {
    elemento.style.display = 'none';
  }
});

if (contador === 0) {
    resultado.innerHTML = '<h3 id="titulo">Não encontramos nenhum resultado para "' + valorPesquisa + '".</h3><p>Verifique se a ortografia está correta ou experimente uma pesquisa mais simples.</p>';
} else {
    resultado.innerHTML = '<h3 id="titulo">Resultado da Busca:</h3><p id="quantidade">' + contador + ' arquivos encontrados.</p>';
}

document.querySelector('.box-tela-inicial').style.display = 'none';
resultado.style.display = 'block';

}

const resultado = document.querySelector('#resultado');


