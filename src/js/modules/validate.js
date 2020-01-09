
const form__input_name = document.querySelector('.form__input_name');
const form__input_email = document.querySelector('.form__input_email');
const form = document.querySelector('.form');
const form__error_name = document.querySelector('.form__error_name');
const form__error_email = document.querySelector('.form__error_email');
const form__label_name = document.querySelector('.form__label_name');
const form__label_email = document.querySelector('.form__label_email');

function validate() {
  event.preventDefault();
  if (form__input_name.value === "") {
    form__input_name.style.border = "2px solid #ED180B";
    form__error_name.style.color = "#ED180B";
    form__label_name.style.color = "#ED180B";
    form__error_name.textContent = "Пожалуйста, заполните поле"
  } else {
    form__error_name.textContent = "";
    form__label_name.style.color = "#5A3F98";
  }

  if (form__input_email.value.search(/\S+@\S+\.\S+/) !== 0) {
    form__input_email.style.border = "2px solid #ED180B";
    form__error_email.style.color = "#ED180B";
    form__label_email.style.color = "#ED180B";
    form__error_email.textContent = 'Пожалуйста, заполните поле';
    } else {
      form__error_email.textContent = '';
      form__label_email.style.color = "#5A3F98";
    }
}

form.addEventListener('submit', validate);
