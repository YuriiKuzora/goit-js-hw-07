'use strict';

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', function () {
  let name = this.value.trim();
  outputName.textContent = name || 'Anonymous';
});
