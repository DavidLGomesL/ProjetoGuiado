//desenvolvimento JS para projeto guiado 1, que teve inicio com HTML e CSS.
let people = [
  //váriável com array para inclusão dos dados da tabela.
  {
    name: 'David Luan Gomes Lima',
    tel: '+55 (85) 91234-5678',
    xp: false
  },
  {
    name: 'Dávina Saldanha de Vasconcelos Gomes',
    tel: '+55 (85) 99999-9999',
    xp: true
  },
  {
    name: 'Rosângela Barbosa Gomes',
    tel: '+55 (85) 98888-8888',
    xp: true
  },
  {
    name: 'Thalita de Almeida Klippel',
    tel: '+55 (85) 96666-6666',
    xp: true
  },
  {
    name: 'Andressa Carneiro de Meneses',
    tel: '+55 (85) 93333-3333',
    xp: false
  }
]

for (person in people) {
  //desenvolvimento da tabela e inserção da mesma no HTML.
  console.log(person)
  document.querySelector(
    'table.list tbody'
  ).innerHTML += `<tr style="background-color: ${
    person % 2 == 0 ? '#fff' : '#eee'
  }">
  <td>${people[person].name}</td>
  <td>${people[person].tel}</td>
  <td>${
    people[person].xp
      ? '<strong style="color:green"> Sim </strong>'
      : '<strong style="color:red"> Não </strong>'
  }</td>
  <td>
    <button>Alterar</button>
  </td>`
}
