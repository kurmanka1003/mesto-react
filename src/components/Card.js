import React from "react";

function Card({ card, onCardClick }) {
  return (
    <li className="cards__element">
      <button
        className="cards__delete-button"
        aria-label="Удалить фотографию"
        type="button"
      />
      <img
        className="cards__image"
        src={card.link}
        alt={card.name}
        onClick={onCardClick}
      />
      <div className="cards__info">
        <h2 className="cards__name">{card.name}</h2>
        <button
          className="cards__like-button"
          aria-label="Поставить лайк"
          type="button"
        />
        <p className="cards__like-counter">{card.likes.length}</p>
      </div>
    </li>
  );
}

export default Card;
