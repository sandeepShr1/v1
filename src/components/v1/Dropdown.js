import React from 'react';

export const Dropdown = ({ options, id, selectedValue, onSelectedValueChange }) => (
  <select id={id} onChange={event => onSelectedValueChange(event.target.value)}>
    {options.map(({ value, label }) => (
      <option key={value} value={value} defaultValue={value === selectedValue}>
        {label}
      </option>
    ))}
  </select>
);