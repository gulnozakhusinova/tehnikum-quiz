import React from 'react'

export const Option = ({ id, answer, isSelected, onSelect }) => {
  return (
    <li className="variant-wrapper">
      <input
        required
        type="radio"
        name="variant" // Use the same name for all options, this ensures that only one can be selected at a time
        id={`variant-${id}`}
        checked={isSelected} // This makes the radio button checked if it's the selected one
        onChange={() => onSelect(id)} // Notify parent when this option is selected
      />
      <label htmlFor={`variant-${id}`}>{answer}</label>
    </li>
  );
};




