const validationInputRef = document.querySelector('#validation-input');
const onInputFn = (event) => {
    if (event.currentTarget.value.length === parseInt(validationInputRef.dataset.length)) {
        validationInputRef.classList.add('valid');
        validationInputRef.classList.remove('invalid');
    }
    else {
        validationInputRef.classList.add('invalid');
        validationInputRef.classList.remove('valid');
    }
};

validationInputRef.addEventListener('blur', onInputFn);