const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');
const elements = ingredients.map(ingredient => {
    const liEl = document.createElement('li');
    liEl.textContent = ingredient;
    return liEl;
})

ingredientsListRef.append(...elements);