const navigation = document.querySelector(`.navigation`);
const openMenuButton = document.querySelector(`.header__open-menu-btn`);
const closeMenuButton = document.querySelector(`.navigation__close-menu-btn`);

openMenuButton.addEventListener(`click`, () => {
  navigation.classList.remove(`navigation--close`);
});

closeMenuButton.addEventListener(`click`, () => {
  navigation.classList.add(`navigation--close`);
});
