let profileElement = document.querySelector('.profile__info');
let nameElement = document.querySelector('.profile__info-name');
let jobElement = document.querySelector('.profile__info-role');
let popupOpenButtonElement = document.querySelector('.profile__edit-button');
let popupElement = document.querySelector('.pop-up');
let popupCloseButtonElement = popupElement.querySelector('.pop-up__close-icon');
let inputNameElement = document.querySelector('.pop-up__input-field_type_name');
let inputJobElement = document.querySelector('.pop-up__input-field_type_role');
let saveButton = document.querySelector('.pop-up__input-save');
const popupPlaceElement = document.querySelector('.pop-up__type_place')



function openPlacePopup() {
  popupPlaceElement.classList.add('pop-up_type_place_opened');
  /*inputNameElement.value = nameElement.textContent;
  inputJobElement.value = jobElement.textContent;*/
};



function closePlacePopup() {
  popupElement.classList.remove('pop-up_type_place_opened');
};



function openPopup() {
  popupElement.classList.add('pop-up_opened');
  inputNameElement.value = nameElement.textContent;
  inputJobElement.value = jobElement.textContent;
};

function closePopup() {
  popupElement.classList.remove('pop-up_opened');
};

function editProfile(evt) {
  evt.preventDefault();
  nameElement.textContent = inputNameElement.value;
  jobElement.textContent = inputJobElement.value;
  closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
profileElement.addEventListener('submit', editProfile);
saveButton.addEventListener('click', editProfile);
popupCloseButtonElement.addEventListener('click', closePopup);
popupPlaceElement.addEventListener('click', openPlacePopup);


/*фичи ПР5 */

const createContent = document.querySelector('.content');
const addPlaceBtn = document.querySelector('.profile__add-button')
const placeInput = document.querySelector('.pop-up__input-field_type_place');
const linkInput = document.querySelector('.pop-up__input-field_type_link');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const createList = () => {

const item = initialCards.map(element => {
  return createCard(element);
}).join('');
createContent.insertAdjacentHTML('afterbegin', item);
};

const createCard = data => {
return `<li class="content__element">
<button class="content__element-delete-button" type="button"></button>
<img alt="Одно из любимых мест" class="content__element-image" src="${data.link}"/>
<div class="content__element-symbols-container">
  <h2 class="content__element-text">${data.name}</h2>
  <button class="content__element-like-button" type="button"></button>
</div>
</li>`
};

const addPlace = () => {
  addPlaceBtn.addEventListener('click', () => {
    const card = createCard({
      name: placeInput.nodevalue,
      link: linkInput.nodevalue,
    });
    createContent.insertAdjacentHTML('afterbegin', card);
  });
};

createList();


