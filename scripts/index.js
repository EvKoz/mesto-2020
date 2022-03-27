const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const initialCardsList = document.querySelector(".content");
const placeInput = document.querySelector(".pop-up__input-form_place");
const popupPlaceOpenElement = document.querySelector(".profile__add-button");
let profileElement = document.querySelector(".profile__info");
let nameElement = document.querySelector(".profile__info-name");
let jobElement = document.querySelector(".profile__info-role");
let popupOpenButtonElement = document.querySelector(".profile__edit-button");
let popupElement = document.querySelector(".pop-up");
let popupCloseButtonElement = popupElement.querySelector(".pop-up__close-icon");
let inputNameElement = document.querySelector(".pop-up__input-field_type_name");
let inputJobElement = document.querySelector(".pop-up__input-field_type_role");
let saveButton = document.querySelector(".pop-up__input-save");
const popupPlaceElement = document.querySelector(".pop-up__type_place");
const popupPlaceCloseElement = document.querySelector(
  ".pop-up__close-icon_place"
);

function openPopup() {
  popupElement.classList.add("pop-up_opened");
  inputNameElement.value = nameElement.textContent;
  inputJobElement.value = jobElement.textContent;
}

function closePopup() {
  popupElement.classList.remove("pop-up_opened");
}

function editProfile(evt) {
  evt.preventDefault();
  nameElement.textContent = inputNameElement.value;
  jobElement.textContent = inputJobElement.value;
  closePopup();
}

function openPlacePopup() {
  popupPlaceElement.classList.add("pop-up_opened");
}

function closePlacePopup() {
  popupPlaceElement.classList.remove("pop-up_opened");
}

function renderCards(xyz) {
  const newCard = `<li class="content__element">
  <button class="content__element-delete-button" type="button"></button>
              <img class="content__element-image" alt="Одно из любимых мест" src="${xyz.link}"/>
  <div class="content__element-symbols-container">
    <h2 class="content__element-text">${xyz.name}</h2>
    <button class="content__element-like-button" type="button"></button>
                </div>
</li>`;

  initialCardsList.insertAdjacentHTML('afterbegin', newCard);
}

function addCard(event) {
  event.preventDefault();
  name: event.currentTarget.querySelector('.pop-up__input-field_type_place').value;
  link: event.currentTarget.querySelector('.pop-up__input-field_type_link').value;
  renderCards();

  closePlacePopup();
}

initialCards.map(renderCards);

popupPlaceOpenElement.addEventListener("click", openPlacePopup);
popupOpenButtonElement.addEventListener("click", openPopup);
profileElement.addEventListener("submit", editProfile);
saveButton.addEventListener("click", editProfile);
popupCloseButtonElement.addEventListener("click", closePopup);
placeInput.addEventListener("submit", addCard);
popupPlaceCloseElement.addEventListener("click", closePlacePopup);
