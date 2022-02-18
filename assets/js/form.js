//"form.js" correspondente ao "form.html".
function testForm(e) { //"function" criada para a inclusão de novas pessoas.
  e.preventDefault();

  for (i in e.target.elements['phone'].value) { //"for" criado para a realização de teste para o campo "phone"(telefone).
    if ('0123456789'.indexOf(e.target.elements['phone'].value[i]) == -1) {
      alert('Apenas número são permitidos no campo telefone!')
      return false
    }
  }

  if (e.target.elements['phone'].value.length < 11) { //segundo teste criado para o campo telefone.
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