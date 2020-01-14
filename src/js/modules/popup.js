const header__button = document.querySelector('.header__button-help');
const block = document.querySelector('.popup');
const header = document.querySelector('.header');
const popup__image = document.querySelector('.popup__image');

function popup() {
  block.classList.toggle('popup_hidden');
  header.classList.toggle('header_hidden');
}

header__button.addEventListener('click', popup);
popup__image.addEventListener('click', popup);
