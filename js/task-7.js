const fontSizeControlRef = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const onInputChange = (event) => {
    text.style.fontSize = event.currentTarget.value + 'px';
}
fontSizeControlRef.addEventListener('change', onInputChange);