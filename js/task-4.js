const divCounterRef = document.querySelector('#counter')
let counterValueRef = document.querySelector('#value');
let counterValue = Number.parseInt(counterValueRef.textContent);

const onIncrementClick = () => {
    counterValue += 1;
    counterValueRef.textContent = counterValue;
};

const onDecrementClick = () => {
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
}

const decrementBtnRef = divCounterRef.firstElementChild;
const incrementBtnRef = divCounterRef.lastElementChild;

incrementBtnRef.addEventListener('click', onIncrementClick);
decrementBtnRef.addEventListener('click', onDecrementClick);