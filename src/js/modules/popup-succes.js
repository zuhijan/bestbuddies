const buttonClose = document.querySelector('.popup-succes__image-close');
const popupSucces = document.querySelector('.popup-succes');

buttonClose.addEventListener('click', () => {
  popupSucces.classList.add('popup-succes_disable');

});