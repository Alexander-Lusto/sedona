const form = document.querySelector(`form`);
const name = form.querySelector(`input[name="user_name"]`);
const surname = form.querySelector(`input[name="user_surname"]`);
const phone = form.querySelector(`input[name="user_phone"]`);
const email = form.querySelector(`input[name="user_email"]`);

const popupSuccess = document.querySelector(`.popup--success`);
const popupSuccessButton = popupSuccess.querySelector(`.popup__button`);

const popupFailure = document.querySelector(`.popup--failure`);
const popupFailureButton = popupFailure.querySelector(`.popup__button`);

form.addEventListener(`submit`, (evt) => {
  evt.preventDefault();
  if (name.value && surname.value && phone.value && email.value) {
    popupSuccess.classList.remove(`visually-hidden`);
  } else {
    popupFailure.classList.remove(`visually-hidden`);
  }

});

document.addEventListener(`keydown`, (evt) => {
  if (evt.keyCode === 27) {
    popupSuccess.classList.add(`visually-hidden`);
    popupFailure.classList.add(`visually-hidden`);
  }
});

popupSuccessButton.addEventListener(`click`, () => {
  popupSuccess.classList.add(`visually-hidden`);
});

popupFailureButton.addEventListener(`click`, () => {
  popupFailure.classList.add(`visually-hidden`);
});
