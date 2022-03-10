let profileElement = document.querySelector(".profile__info");
let popupElement = document.querySelector(".pop-up");
let popupCloseButtonElement = popupElement.querySelector(".pop-up__close-icon");
let popupOpenButtonElement = document.querySelector(
  ".profile__info-edit-button"
);
let inputNameElement = document.querySelector(".pop-up__input-field_type_name");
let inputJobElement = document.querySelector(".pop-up__input-field_type_role");
let nameElement = document.querySelector(".profile__info-name");
let jobElement = document.querySelector(".profile__info-role");
let saveButton = document.querySelector(".pop-up__input-save");

let openPopup = function () {
  popupElement.classList.add("pop-up_opened");
  inputNameElement.value = nameElement.textContent;
  inputJobElement.value = jobElement.textContent;
};

let closePopup = function () {
  popupElement.classList.remove("pop-up_opened");
};

function editProfile(evt) {
  evt.preventDefault();

  nameElement.textContent = inputNameElement.value;
  jobElement.textContent = inputJobElement.value;
  closePopup();
}

profileElement.addEventListener("submit", editProfile);
saveButton.addEventListener("click", editProfile);
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
