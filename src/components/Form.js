import React from 'react';

const Form = ({ value, onChange }) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        placeholder="Enter city"
        onChange={onChange}
        value={value}
      />
    </form>
  )
}

export default Form;
