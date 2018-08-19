import React from 'react';

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
            borderColor: `${isError > 0 ? 'red' : ''}`,
          }}
        />
      </label>
      {isError && <span>{error}</span>}
    </div>
  );
};

export { Input };
