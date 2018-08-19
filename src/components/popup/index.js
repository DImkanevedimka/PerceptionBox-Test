import React from 'react';

const Popup = (props) => {
  const { isOpen, closePopup, name } = props;
  return (
    <div style={{ display: `${isOpen ? 'flex' : ''}` }} onClick={e => closePopup(e)}>
      <div>
        <span>&#10006;</span>
        <p>Добро пожаловать!</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export { Popup };
