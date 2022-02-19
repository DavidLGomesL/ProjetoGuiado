//"form.js" correspondente ao "form.html".
function testForm(e) { //"function" criada para a inclusão de novas pessoas.
  e.preventDefault();

  /*for (i in e.target.elements['phone'].value) { //"for" criado para a realização de teste para o campo "phone"(telefone).
    if ('0123456789'.indexOf(e.target.elements['phone'].value[i]) == -1) {
      alert('Apenas número são permitidos no campo telefone!')
      return false
    }
  }*/

  let phonePattern = /[^0-9-() ]+/g //teste criado em formato de expressão regular em substituição ao primeiro teste do campo telefone.
  if (phonePattern.test(e.target.elements['phone'].value)) {
    alert('Apenas número são permitidos no campo telefone!')
    return false
  }

  if (e.target.elements['phone'].value.replace(/[-() ]/g, '').length < 11) { //segundo teste criado para o campo telefone.
    alert('Número invalido!')
      return false
  }

  let peopleRaw = localStorage.getItem('people')
  if (peopleRaw != null) { 
    var people = JSON.parse(peopleRaw)
  } else {
    var people = [];
  }

  if (id !== null) { //"is e else" criado para que seja possível a realização de alteração nos dados cadastrados.
    people[id] = {
      name: e.target.elements['name'].value,
      tel: e.target.elements['phone'].value,
      xp: (e.target.elements['xp'].value == 'true')
    }
  } else {
    people.push({ //"array push" criado para a inclusão de novos valores.
      name: e.target.elements['name'].value,
      tel: e.target.elements['phone'].value,
      xp: (e.target.elements['xp'].value == 'true')
    })
  }
  
  localStorage.setItem('people', JSON.stringify(people))
  
  document.getElementById('goHome').click() //irá alterar para a página da lista quando clicar no botão salvar da página de cadastro.
}

let urlPrincipal = new URL(window.location.href)

let id = urlPrincipal.searchParams.get('person')
if (id !== null) {
  let peopleRaw = localStorage.getItem('people')
  if (peopleRaw != null) { 
    var people = JSON.parse(peopleRaw)
  } else {
    var people = [];
  }

  console.log(people[id])
  //a parte abaixo foi criada para a identificação dos dados cadastrados na tabela.
  document.getElementById('name').value = people[id].name
  document.getElementById('phone').value = people[id].tel
  if(people[id].xp) {
    document.getElementById('xp-yes').checked = true
  } else {
    document.getElementById('xp-no').checked = true
  }
}

function testCampPhone(e) { //"função usada para estabelecer parametros sobre o que pode ou não ser digitado no campo telefone. No caso só será aceito números. Foi usado expressão regular para definir o parâmetro."
  e.preventDefault()
  console.log(e)
  //abaixo foram incluidos parametros para inclusão dos parenteses "()", espaço " " e traço "-".
  if (e.target.value.length == 0) {
    e.target.value += '('
  }

  if (e.target.value.length == 3) {
    e.target.value += ') '
  }

  if (e.target.value.length == 10) {
    e.target.value += '-'
  }

  if ((/[0-9]/g).test(e.key) && e.target.value.length < 15) { //Parametro para limitação de até 15 caracteres numéricos na digitação do número de telefone.
    e.target.value += e.key
  }
}