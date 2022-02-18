//"form.js" correspondente ao "form.html".
function testForm(e) { //"function" criada para a inclusão de novas pessoas.
  e.preventDefault();

  let peopleRaw = localStorage.getItem('people')
  if (peopleRaw != null) { 
    var people = JSON.parse(peopleRaw)
  } else {
    var people = [];
  }

  people.push({ //"array push" criado para a inclusão de novos valores.
    name: e.target.elements['name'].value,
    tel: e.target.elements['phone'].value,
    xp: (e.target.elements['xp'].value == 'true')
  })

  localStorage.setItem('people', JSON.stringify(people))
  
  document.getElementById('goHome').click() //irá alterar para a página da lista quando clicar no botão salvar da página de cadastro.
}