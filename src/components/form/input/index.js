import React from 'react';
import './styles.css';

const Input = (props) => {
  const {
    name,
    type,
    value,
    onChange,
    error,
  } = props;

  const isError = error.length > 0;
  return (
    <div>
      <label>
        {name}
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          style={{
            borderColor: `${isError > 0 ? '#f00' : ''}`,
          }}
        />
      </label>
      {isError && <span>{error}</span>}
    </div>
  );
};

export { Input };
