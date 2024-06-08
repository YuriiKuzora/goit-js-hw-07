'use strict';

const ulNumCateg = document.querySelectorAll('#categories .item');
console.log('Number of categories:', ulNumCateg.length);

ulNumCateg.forEach(category => {
  const itemName = category.querySelector('h2').textContent;
  const itemElement = category.querySelectorAll('ul  li').length;

  console.log('Category:', itemName);
  console.log('Elements:', itemElement);
});
