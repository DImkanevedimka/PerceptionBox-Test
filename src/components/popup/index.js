import React from "react";

const Popup = (props) => (
  <div style = {{display: `${props.isOpen ? 'flex' : ''}`}} onClick={(e) => (props.closePopup(e))} >
    <div>
      <span>X</span>
      <p>Добро пожаловать!</p>
      <p>{props.name}</p>
    </div>
  </div>
);

export { Popup };
