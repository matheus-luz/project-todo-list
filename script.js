const title = document.createElement('header');
document.body.appendChild(title);
const h1 = document.createElement('h1');
h1.innerText = 'Minha Lista de Tarefas';
title.appendChild(h1);

const h4 = document.createElement('h4');
h4.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
h4.id = 'funcionamento';
document.body.appendChild(h4);

const input = document.createElement('input');
input.id = 'texto-tarefa';
input.placeholder = 'Escreva suas tarefas:';
document.body.appendChild(input);

const ol = document.createElement('ol');
ol.id = 'lista-tarefas';
document.body.appendChild(ol);
const button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerText = 'Enviar';
document.body.appendChild(button);

const buttonLi = document.querySelector('#criar-tarefa');
button.addEventListener('click', () => {
  const listOl = document.querySelector('ol');
  const li = document.createElement('li');
  const input = document.querySelector('input');
  li.innerText = input.value;
  listOl.appendChild(li);
  input.value = '';
});

const olItems = document.querySelector('ol');
function colorLi(event) {
  const list = document.querySelectorAll('li');

  for (let li of list) {
    li.style.backgroundColor = 'white';
  }
  const click = event.target;
  click.style.backgroundColor = 'rgb(128, 128, 128)';
}
olItems.addEventListener('click', colorLi);

// Documentação - https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
olItems.addEventListener('dblclick', (event) => {
  const twoClick = event.target;
  twoClick.classList.toggle('completed');
});

const buttonClear = document.createElement('button');
buttonClear.id = 'apaga-tudo';
buttonClear.innerText = 'Apagar tudo';
document.body.appendChild(buttonClear);

buttonClear.addEventListener('click', () => {
  const olList = document.querySelector('ol');
  olList.innerText = '';
});

const buttonClearFinished = document.createElement('button');
buttonClearFinished.id = 'remover-finalizados';
buttonClearFinished.innerText = 'Remover';
document.body.appendChild(buttonClearFinished);
// Quando ele for clicado
// Documentação - https://developer.mozilla.org/pt-BR/docs/Web/API/Node/contains
const buttonRemoveFinished = document.querySelector('#remover-finalizados');
buttonRemoveFinished.addEventListener('click', () => {
  const olRemove = document.querySelector('ol');
  const lis = document.querySelectorAll('li');
  for (let index = 0; index < lis.length; index += 1) {
    if (lis[index].classList.contains('completed')) {
      olRemove.removeChild(lis[index]);
    }
  }
});

const buttonSalve = document.createElement('button');
buttonSalve.id = 'salvar-tarefas';
buttonSalve.innerText = 'Salvar Tarefas';
document.body.appendChild(buttonSalve);
// Quando receber o click
// Documentação - https://www.w3schools.com/jsref/met_storage_setitem.asp
const salvar = document.querySelector('#salvar-tarefas');
salvar.addEventListener('click', () => {
  const olLi = document.querySelector('#lista-tarefas');
  localStorage.setItem('list', olLi.innerHTML); // Salvar as informações
});

// Documentação - https://www.w3schools.com/jsref/met_storage_getitem.asp
window.onload = () => {
  const olLi = document.querySelector('#lista-tarefas');
  olLi.innerHTML = localStorage.getItem('list'); // Retornar as informações
};

const buttonMove = document.createElement('button');
buttonMove.id = 'mover-cima';
buttonMove.innerText = 'Mover para Cima';
const buttonMoveList = document.createElement('button');
buttonMoveList.innerText = 'Mover para Baixo';
buttonMoveList.id = 'mover-baixo';
document.body.appendChild(buttonMove);
document.body.appendChild(buttonMoveList);

// Documentação - https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
const remove = document.createElement('button');
remove.id = 'remover-selecionado';
remove.innerText = 'Remover Tarefas Realidazadas';
document.body.appendChild(remove);
const buttonCheckRemove = document.querySelector('#remover-selecionado');
buttonCheckRemove.addEventListener('click', () => {
  const li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    if (li[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      li[i].remove();
    }
  }
});
