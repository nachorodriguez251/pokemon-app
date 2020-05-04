import React from 'react';
import './styles.css';

function Button(props) {
  return (
    <button href="#" className={props.styleName} disabled={props.disable}>
      { props.text }
    </button>
  );
}

export default Button;
