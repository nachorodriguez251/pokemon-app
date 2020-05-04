import React from 'react';

function Select(props) {
  return (
    <select
      id={props.id}
      name={props.id}
      onChange={(e) => props.change(e.target.value)}
      value={props.value}
    >
      <option value="">{props.title}</option>
      {props.options.map((option) => <option key={option} value={option}>{option}</option>)}
    </select>
  );
}

export default Select;
