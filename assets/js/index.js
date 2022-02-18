//desenvolvimento JS para projeto guiado 1, que teve inicio com HTML e CSS.
let peopleRaw = localStorage.getItem('people') //'localStorage' incluido para salvar informações no 'localStorage' da página. Dados anteriores das pessoas, foram incluidos no 'localStorage' da página.
if (peopleRaw != null) { //inclusão da função 'if e else'.
  var people = JSON.parse(peopleRaw)
} else {
  var people = [];
}
 

function desenhaTabela() { //'function' criada para inclusão dos dados acima na tabela.

  currentLines = [...document.querySelectorAll('table.list tbody .dinamic-content')]; //Aqui 'currentLines' será usado para concatenar os 'arrays'
  currentLines.forEach((element) => { //Será realizada a remoção de um elemento da tabela.
    element.remove()
  })

  for (person in people) {
    //desenvolvimento da tabela e inserção da mesma no HTML.
    document.querySelector(
      'table.list tbody'
    ).innerHTML += `<tr class="dinamic-content" style="background-color: ${
      //O "style" foi utilizado aqui para aplicar as cores "branca e cinza" de forma intercalada seguindo a condição imposta, onde se "person" dividido por 2 for igual a zero, sendo "true", irá ser aplicado a cor "branca" e sendo "false", será aplicada a cor "cinza". Assim, quando começar a execução, irá contar a partir do indice 0 do "array", aplicando a cor "branca", ou seja, sempre que o número da linha for par, a cor da mesma será branca e sempre que a linha da tabela for ímpar, a cor aplicada será a cinza.
      person % 2 == 0 ? '#fff' : '#eee'
    }">
    <td>${people[person].name}</td>
    <td>${people[person].tel}</td>
    <td>${
      people[person].xp
        ? '<strong style="color:green"> Sim </strong>' //Nessa linha está sendo aplicado o "negrito" a palavra "sim" através da "tag strong" e está sendo aplicado a cor "verde",através do "style", a palavra "sim", tornando mais interativa a percepção na tabela, se as pessoas que constam na mesma, possuem ou não experiência.
        : '<strong style="color:red"> Não </strong>' //Assim como na palavra "sim", está sendo aplicada a tag strong para a palavra "não" deixando-a com "negrito" e está sendo aplicada a cor vermelha através do style, tornando mais interativa a percepção na tabela.
    }</td>
    <td>
      <button onclick="deleteUser(${person})">Excluir</button> 
      <a href="./form.html?person=${person}">Editar</a> 
    </td>` //'people.splice será usado para retirar um 'person' da tabela.
          //botão "editar" criado para que seja possivel a edição dos dados, retornando a página de cadastro.
  } 
}
//criada função deleteUser, somente para organizar melhor a linha do "button"
function deleteUser(p) {
  people.splice(p, 1); 
  desenhaTabela(); 
  localStorage.setItem('people', JSON.stringify(people));
}

desenhaTabela() //Vai chamar os elementos da tabela.
