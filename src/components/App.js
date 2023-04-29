import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ImagePopup from "../components/ImagePopup";
import PopupWithForm from "../components/PopupWithForm";

function App() {
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsProfilePopupOpen(true);
  }

  function handleCardClick(evt) {
    if (evt.target.classList.contains("cards__image")) {
      setSelectedCard({ name: evt.target.alt, link: evt.target.src });
    }
  }

  function closeAllPopups() {
    setIsAvatarPopupOpen(false);
    setIsProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  return (
    <>
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        title={"Редактировать профиль"}
        name={"profile"}
        isOpen={isProfilePopupOpen && "popup_opened"}
        onClose={closeAllPopups}
        buttonText={"Сохранить"}
      >
        <input
          className="form__input form__input_type_name"
          id="name-input"
          name="name"
          type="text"
          placeholder="Введите имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="profile-name-error form__input-error"></span>
        <input
          className="form__input form__input_type_about"
          id="about-input"
          name="about"
          type="text"
          placeholder="Введите сферу деятельности"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="profile-job-error form__input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title={"Новое место"}
        name={"add-card"}
        isOpen={isAddPlacePopupOpen && "popup_opened"}
        onClose={closeAllPopups}
        buttonText={"Создать"}
      >
        <input
          className="form__input form__input_type_image-title"
          id="place-input"
          name="name"
          type="text"
          placeholder="Введите название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="addCard-name-error form__input-error"></span>
        <input
          className="form__input form__input_type_image-url"
          id="link-input"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="addCard-url-error form__input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title={"Обновить аватар"}
        name={"update-avatar"}
        isOpen={isAvatarPopupOpen && "popup_opened"}
        onClose={closeAllPopups}
        buttonText={"Сохранить"}
      >
        <input
          className="form__input form__input_type_avatar-url"
          id="avatar-input"
          name="avatar"
          type="url"
          placeholder="Укажите ссылку на аватар"
          required
        />
        <span className="avatar-input-error form__input-error"></span>
      </PopupWithForm>

      <PopupWithForm name={"delete"} title={"Вы уверены?"} buttonText={"Да"} />

      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
    </>
  );
}

export default App;
