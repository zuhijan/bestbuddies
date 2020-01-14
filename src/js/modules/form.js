const input__value = document.querySelector('.form__input_value');
const form__radio = document.querySelectorAll('.form__input_radio-value');
const form__input_name = document.querySelector('.form__input_name');
const form__input_email = document.querySelector('.form__input_email');

function style(event) {
  event.target.style.border = "2px solid #FC691B"
  if (event.target.value == "") {
    event.target.style.border = "2px solid #9397CB"
  }
}

function check(event) {
  form__radio.forEach(function (item) {
    item.checked = false;
  })

  if (event.target.value == "") {
    form__radio[2].checked = true
  }
}

input__value.addEventListener('input', check);
input__value.addEventListener('input', style);
form__input_name.addEventListener('input', style);
form__input_email.addEventListener('input', style);

