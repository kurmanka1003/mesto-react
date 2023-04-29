import React from "react";

function PopupWithForm({ title, name, children, isOpen, onClose, buttonText }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen}`}>
      <div className="popup__container">
        <form className={`form form_type_${name}`} name={name} noValidate>
          <h2 className="form__title">{title}</h2>
          <div className="form__fieldset">
            {children}
            <button className="form__submit" type="submit">
              {buttonText}
            </button>
          </div>
          <button
            className="popup__close"
            type="reset"
            aria-label="Закрыть окно"
            onClick={onClose}
          ></button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
