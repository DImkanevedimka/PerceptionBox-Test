import React from 'react';
import './styles.css';

const Popup = (props) => {
  const { isOpen, closePopup, name } = props;
  return (
    <div style={{ display: `${isOpen ? 'flex' : ''}` }} onClick={closePopup}>
      <div>
        <span>&#10006;</span>
        <p>Добро пожаловать!</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export { Popup };
