function pesquisar() {

  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor digitado no campo de pesquisa e converte para minúsculas
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  // Verifica se o campo de pesquisa está vazio. Se estiver, exibe uma mensagem e encerra a função.
  if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado</p>"
      return
  }

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";

  // Itera sobre cada item de dado (assumindo que 'dados' é um array de objetos)
  for (let dado of dados) {
      // Converte as propriedades do objeto para minúsculas para facilitar a comparação
      franquia = dado.franquia.toLowerCase()
      resumo = dado.resumo.toLowerCase()
      conferencia = dado.conferencia.toLowerCase()
      quarterback = dado.quarterback.toLowerCase()

      // Verifica se o termo de pesquisa está presente em alguma das propriedades do objeto
      if (franquia.includes(campoPesquisa) || 
          resumo.includes(campoPesquisa) ||
          conferencia.includes(campoPesquisa) ||
          quarterback.includes(campoPesquisa)) {

          // Se o termo foi encontrado, cria um novo elemento HTML para exibir os resultados
          resultados += `
              <div class="item-resultado">
                  <h2>${dado.franquia}</h2>
                  <p class="descricao-meta">${dado.resumo}</p>
                  <h4>Conferência</h4>
                  <p class="descricao-meta">${dado.conferencia}</p>
                  <h4>Quarterback</h4>
                  <p class="descricao-meta">${dado.quarterback}</p>
                  <a href=${dado.link} target="_blank">Site Oficial</a>
              </div>
          `;
      }
  }

  // Verifica se algum resultado foi encontrado. Se não, exibe uma mensagem.
  if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>"
  }

  // Atualiza o conteúdo da seção de resultados com o HTML gerado
  section.innerHTML = resultados;
}