const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output')

const onInputFn = (event) => event.currentTarget.value === '' ? nameOutputRef.textContent = 'незнакомец' : nameOutputRef.textContent = event.currentTarget.value;

inputRef.addEventListener('input', onInputFn);