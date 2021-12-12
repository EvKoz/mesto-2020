let profileElement = document.querySelector(".profile__info");
let popupElement = document.querySelector(".pop-up");
let popupCloseButtonElement = popupElement.querySelector(".pop-up__close-icon");
let popupOpenButtonElement = document.querySelector(
  ".profile__info-edit-button"
);

let openPopup = function () {
  popupElement.classList.add("pop-up_opened");
};

popupOpenButtonElement.addEventListener("click", openPopup);

let closePopup = function () {
  popupElement.classList.remove("pop-up_opened");
};

popupCloseButtonElement.addEventListener("click", closePopup);

let saveButton = document.querySelector(".pop-up__input-save");

saveButton.addEventListener("click", editProfile);

let inputNameElement = document.querySelector(".pop-up__input-name");
let inputJobElement = document.querySelector(".pop-up__input-role");
let nameElement = document.querySelector(".profile__info-name");
let jobElement = document.querySelector(".profile__info-role");

inputNameElement.value = nameElement.textContent;
inputJobElement.value = jobElement.textContent;

function editProfile(evt) {
  evt.preventDefault();

  profileElement.innerHTML = `<div class='profile__info'>
      <div class='profile__info-name'>${inputNameElement.value}</div>
      <button class='profile__info-edit-button'></button>
      <div class='profile__info-role'>${inputJobElement.value}</div>
    </div>`;
  closePopup();
}

profileElement.addEventListener("submit", editProfile);
