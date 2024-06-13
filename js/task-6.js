'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');

create.addEventListener('click', () => {
  const input = document.querySelector('#controls input');
  let amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Enter a number from 1 to 100.');
  }
});

destroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxesBlock = document.getElementById('boxes');
  boxesBlock.innerHTML = '';

  let sizeBlock = 30;
  for (let i = 0; i < amount; i++) {
    const square = document.createElement('div');

    square.style.width = `${sizeBlock}px`;
    square.style.height = `${sizeBlock}px`;
    square.style.backgroundColor = getRandomHexColor();
    boxesBlock.appendChild(square);
    sizeBlock += 10;
  }
}

function destroyBoxes() {
  const boxesBlock = document.getElementById('boxes');
  boxesBlock.innerHTML = '';
}
