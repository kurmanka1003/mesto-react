import { useState, useEffect } from "react";
import Card from "./Card";
import api from "../utils/Api";
import defaultAvatar from "../images/profile-avatar.jpg";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userAvatar, setUserAvatar] = useState(defaultAvatar);
  const [userName, setUserName] = useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = useState(
    "Исследователь океана"
  );

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserData()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => setCards(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__box">
          <button
            onClick={onEditAvatar}
            className="profile__avatar-button"
            aria-label="Редактирование аватара"
          >
            <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          </button>
          <div className="profile__info">
            <div className="profile__details">
              <h1 className="profile__name">{userName}</h1>
              <button
                onClick={onEditProfile}
                type="button"
                className="profile__edit-button"
                aria-label="Редактировать профиль"
              ></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__add-button"
          aria-label="Добавить фотографию"
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => {
            return (
              <Card key={card._id} card={card} onCardClick={onCardClick} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
