let addButton = document.querySelector(".profile__add-button");
const popupPlaceCloseElement = document.querySelector(
  ".pop-up__close-icon_place"
);
let popupPlaceElement = document.querySelector(".pop-up__type_place");
let popupOpenButtonElement = document.querySelector(".profile__edit-button");
let popupElement = document.querySelector(".pop-up");
let popupCloseButtonElement = popupElement.querySelector(".pop-up__close-icon");
let inputNameElement = document.querySelector(".pop-up__input-field_type_name");
let nameElement = document.querySelector(".profile__info-name");
let inputJobElement = document.querySelector(".pop-up__input-field_type_role");
let jobElement = document.querySelector(".profile__info-role");
let profileElement = document.querySelector(".profile__info");
let saveButton = document.querySelector(".pop-up__input-save");

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
  popupPlaceElement.classList.add("pop-up__place_opened");
}

function closePlacePopup() {
  popupPlaceElement.classList.remove("pop-up__place_opened");
}

popupCloseButtonElement.addEventListener("click", closePopup);
profileElement.addEventListener("submit", editProfile);
saveButton.addEventListener("click", editProfile);

popupOpenButtonElement.addEventListener("click", openPopup);
popupPlaceCloseElement.addEventListener("click", closePlacePopup);
addButton.addEventListener("click", openPlacePopup);

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

const container = document.querySelector(".main");
const cardsContainer = container.querySelector(".content");
const savePlaceButton = container.querySelector(".pop-up__input-save_place");
const delButton = container.querySelector(".content__element-delete-button");

function renderCards(data) {
  const newCard = `<li class="content__element">
  <button class="content__element-delete-button" type="button"></button>
              <img class="content__element-image" alt="Одно из любимых мест" src="${data.link}"/>
  <div class="content__element-symbols-container">
    <h2 class="content__element-text">${data.name}</h2>
    <button class="content__element-like-button" type="button"></button>
                </div>
</li>`;

  cardsContainer.insertAdjacentHTML("afterbegin", newCard);
}

initialCards.map(renderCards);

function addCard(nameValue, linkValue) {
  evt.preventDefault();
  const cardTemplate = document.querySelector("#template").content;
  const cardElement = cardTemplate
    .querySelector(".content__element")
    .cloneNode(true);
  cardElement.querySelector(".content__element-image").textContent = linkValue;
  cardElement.querySelector(".content__element-text").textContent = nameValue;
  cardElement
    .querySelector(".content__element-like-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle(".content__element-like-button_active");
    });
  cardsContainer.append(cardElement);
}
savePlaceButton.addEventListener("click", function () {
  const name = document.querySelector(".content__element-text");
  const link = document.querySelector(".content__element-image");
  addCard(name.value, link.value);

  closePlacePopup();
});
