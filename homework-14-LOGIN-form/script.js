const loginEl = document.querySelector('.main-form__login');
const passwordEl = document.querySelector('.main-form__password');
const buttonEl = document.querySelector('.main-form__button');
const formEl = document.querySelector('.main-form');
const legalPassword = '4444';
const legalLogin = 'may@gmail.com';

// Кнопка неактивна, если поля - пусты :
buttonEl.disabled = true;
formEl.addEventListener('input', () => {
    
    if (loginEl.value.length < 4 || passwordEl.value.length < 4) {
        buttonEl.disabled = true;
    }  
    else buttonEl.disabled = false;
})

// Проверка ввода email на валидность
function emailTest(input) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}


loginEl.addEventListener('blur', () => {
    if (loginEl.nextElementSibling) {
        loginEl.nextElementSibling.remove();
    }
    if (!emailTest(loginEl) && loginEl.value) {
        loginEl.insertAdjacentHTML('afterend',
        `<div class="main-form__error">
        Wrong email format!!!
        </div>`);
        loginEl.classList.add('error-border');
    }
} )

const onItemFocus = e => {
    if (e.target.classList.contains('error-border')) {
        e.target.classList.remove('error-border');
    }
    if ( e.target.nextElementSibling) {
        e.target.nextElementSibling.remove();
    }
    e.target.placeholder = "";
};

loginEl.addEventListener('focus', onItemFocus);
passwordEl.addEventListener('focus', onItemFocus);


// Отправка формы... проверка на совпадение данных
formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
    if ( loginEl.value == legalLogin && passwordEl.value == legalPassword ) {
        event.preventDefault();
        window.location.href = './TODO-List-v2-refactored/index.html';
    }
    else {
        event.preventDefault();
        if (passwordEl.nextElementSibling) {
            passwordEl.nextElementSibling.remove();
        }
        passwordEl.insertAdjacentHTML('afterend',
        `<div class="main-form__error">
        Wrong email or password! 
        Try again.
        </div>`);;
        formEl.classList.add('error-border')
        passwordEl.value = '';
        console.log(passwordEl.value);
        passwordEl.blur();
    }
}

passwordEl.addEventListener('focus', () => {
    passwordEl.placeholder = '';
    if (formEl.classList.contains('error-border')) 
        formEl.classList.remove('error-border');
    if  (passwordEl.nextElementSibling)    
    passwordEl.nextElementSibling.remove();
})


    













