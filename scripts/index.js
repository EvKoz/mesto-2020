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
    name: "Запорожье",
    link: "https://images.unsplash.com/photo-1588069253177-22ddb2be7fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JUQwJUI3JUQwJUIwJUQwJUJGJUQwJUJFJUQxJTgwJUQwJUJFJUQwJUI2JUQxJThDJUQwJUI1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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

const edBtn = document.querySelector(".profile__edit-button");
const usPop = document.querySelector(".pop-up");
const usName = document.querySelector(".pop-up__input-field_type_name");
const usJob = document.querySelector(".pop-up__input-field_type_role");
const prevUsName = document.querySelector(".profile__info-name");
const prevUsJob = document.querySelector(".profile__info-role");
const saveUsBtn = document.querySelector(".pop-up__input-save");
const closeBtn = document.querySelector(".pop-up__close-icon");
const adBtn = document.querySelector(".profile__add-button");
const plPop = document.querySelector(".pop-up__type_place");
const savePlBtn = document.querySelector(".pop-up__input-form_place");
const closeAdBtn = document.querySelector(".pop-up__close-icon_place");
const cardsContainer = document.querySelector(".content");
const delBtn = document.querySelector(".content__element-delete-button");
const cardTemplate = document.querySelector(".card-template").content;

function edData() {
  usPop.classList.add("pop-up_opened");
  usName.value = prevUsName.textContent;
  usJob.value = prevUsJob.textContent;
}

function saveUs(evt) {
  evt.preventDefault();
  prevUsName.textContent = usName.value;
  prevUsJob.textContent = usJob.value;
  closeUs();
}

function closeUs() {
  usPop.classList.remove("pop-up_opened");
}

function addPlace() {
  plPop.classList.add("pop-up_opened");
}

function closePlace() {
  plPop.classList.remove("pop-up_opened");
}

function addCard(nameValue, linkValue) {
  const cardTemplate = document.querySelector(".card-template").content;
  const cardElement = cardTemplate
    .querySelector(".content__element")
    .cloneNode(true);
  cardElement.querySelector(".content__element-image").src = linkValue;
  cardElement.querySelector(".content__element-text").textContent = nameValue;
  cardElement
    .querySelector(".content__element-like-button")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("content__element-like-button_active");
    });
  cardElement
    .querySelector(".content__element-delete-button")
    .addEventListener("click", function (event) {
      event.target.closest(".content__element").remove();
    });
  cardsContainer.prepend(cardElement);
}

initialCards.forEach(function (item) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".content__element-text").textContent = item.name;
  cardElement.querySelector(".content__element-image").src = item.link;
  cardElement
    .querySelector(".content__element-like-button")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("content__element-like-button_active");
    });
  cardElement
    .querySelector(".content__element-delete-button")
    .addEventListener("click", function (event) {
      event.target.closest(".content__element").remove();
    });
  cardsContainer.prepend(cardElement);
});

savePlBtn.addEventListener("submit", function (evt) {
  //почему слушатель работает с формой, а не с кнопкой?
  evt.preventDefault();
  const name = document.querySelector(".pop-up__input-field_type_place");
  const link = document.querySelector(".pop-up__input-field_type_link");
  addCard(name.value, link.value);
  name.value = "";
  link.value = "";
  closePlace();
});

edBtn.addEventListener("click", edData);
saveUsBtn.addEventListener("click", saveUs);
closeBtn.addEventListener("click", closeUs);
adBtn.addEventListener("click", addPlace);
closeAdBtn.addEventListener("click", closePlace);
