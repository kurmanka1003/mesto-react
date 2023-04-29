import React from "react";

function ImagePopup({ onClose, card }) {
  return (
    <div
      className={`popup popup_image popup-site ${card.link && "popup_opened"}`}
    >
      <div className="site">
        <div className="site__figure">
          <img className="site__photo" src={card.link} alt={card.name} />
          <h2 className="site__caption">{card.name}</h2>
          <button
            onClick={onClose}
            type="button"
            className="popup__close"
            aria-label="Закрыть окно"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;
