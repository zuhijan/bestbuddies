import { pay } from './widgetForm.js';

const form__input_name = document.querySelector('.form__input_name');
const form__input_email = document.querySelector('.form__input_email');
const form = document.querySelector('.form');
const form__error_name = document.querySelector('.form__error_name');
const form__error_email = document.querySelector('.form__error_email');
const form__label_name = document.querySelector('.form__label_name');
const form__label_email = document.querySelector('.form__label_email');
const form__radio = document.querySelectorAll('.form__input_radio-value');
const input__value = document.querySelector('.form__input_value');

function validate () {
  event.preventDefault();
  const email = validateEmail();
  const name = validateName();
  const emailValue = form__input_email.value;

  if (input__value.value === "") {
    form__radio.forEach(function (item) {
      if (item.checked === true && email && name) {
        let amount = Number(item.value);
          pay(amount, emailValue);
      };
    })
  } else if (email && name) {
      let amount = Number(input__value.value);
      pay(amount, emailValue);
  }
}

function validateName() {
  if (form__input_name.value === "") {
    form__input_name.style.border = "2px solid #ED180B";
    form__error_name.style.color = "#ED180B";
    form__label_name.style.color = "#ED180B";
    form__error_name.textContent = "Пожалуйста, заполните поле"
    return false;
  } else {
    form__error_name.textContent = "";
    form__label_name.style.color = "#5A3F98";
    return true;
  }
}

function validateEmail() {
  if (form__input_email.value.search(/\S+@\S+\.\S+/) !== 0) {
    form__input_email.style.border = "2px solid #ED180B";
    form__error_email.style.color = "#ED180B";
    form__label_email.style.color = "#ED180B";
    form__error_email.textContent = 'Пожалуйста, заполните поле';
    return false;
    } else {
      form__error_email.textContent = '';
      form__label_email.style.color = "#5A3F98";
      return true;
    }
}

form.addEventListener('submit', validate);
