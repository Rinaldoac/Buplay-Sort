// Selecao de Elementos
const duosForm = document.querySelector('.duos-form');
const teamsForm = document.querySelector('.teams-form');
const duosInput = document.querySelector('#duos-input');
const teamsInput = document.querySelector('#teams-input');
const removeButton = document.querySelector('.remove-btn');
const clearButton = document.querySelector('.clear-btn');
const sortButton = document.querySelector('.sort-btn');

const duosResult = document.querySelector('.duos-result');
const teamsResult = document.querySelector('.teams-result');
const results = document.querySelector('.results-container');
const result = document.querySelector('.result');
let listDuo = [];
let listTeam = [];

// Funcoes
const saveDuo = (text) => {
  const duo = document.createElement('div');
  duo.classList.add('duo');

  const duoTitle = document.createElement('h3');
  duoTitle.classList.add('duoH3');
  duoTitle.innerText = text;
  duo.appendChild(duoTitle);
  listDuo.push(text);

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');
  removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  duo.appendChild(removeBtn);

  duosResult.appendChild(duo);

  duosInput.value = '';
  duosInput.focus();
};

const saveTeam = (text) => {
  const team = document.createElement('div');
  team.classList.add('team');

  const teamTitle = document.createElement('h3');
  teamTitle.classList.add('teamH3');
  teamTitle.innerText = text;
  team.appendChild(teamTitle);
  listTeam.push(text);

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');
  removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  team.appendChild(removeBtn);

  teamsResult.appendChild(team);

  teamsInput.value = '';
  teamsInput.focus();
};

//  Sorteio
function sort() {
  listDuo.forEach((duo) => {
    const i = Math.floor(Math.random() * listTeam.length);
    let team = listTeam[i];
    const newTeam = listTeam.splice(i, 1);
    team = newTeam;

    const sorted = document.createElement('div');
    sorted.classList.add('result');
    const teamDuo = document.createElement('h3');
    teamDuo.innerText = duo;
    const teamTeam = document.createElement('h3');
    teamTeam.innerText = newTeam;

    sorted.appendChild(teamDuo);
    sorted.appendChild(teamTeam);

    results.appendChild(sorted);
  });
}

// Limpar inputs
function cleanInputs() {
  duosInput.value = '';
  teamsInput.value = '';
}
// Deletar Duos e Times salvos
function deleteAll() {
  teamsResult.innerHTML = '';
  duosResult.innerHTML = '';
  results.innerHTML =
    ' <header><h2 class="title-results">Duplas e Times</h2></header>';
  listDuo = [];
  listTeam = [];
}

// Eventos
duosForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputValue = duosInput.value;

  if (inputValue) {
    saveDuo(inputValue);
  }
});

teamsForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputValue = teamsInput.value;

  if (inputValue) {
    saveTeam(inputValue);
  }
});

document.addEventListener('click', (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest('div');

  if (targetEl.classList.contains('remove-btn')) {
    parentEl.remove();
  }
});

clearButton.addEventListener('click', (e) => {
  e.preventDefault();
  cleanInputs();
  deleteAll();
  results.classList.add('hide');
});

sortButton.addEventListener('click', (e) => {
  e.preventDefault();
  results.classList.toggle('hide');
  sort();
});
