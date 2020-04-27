import React from 'react';
import './styles.css';

function Button(props) {
  return (
    <a href="#" className="btn-app">
      { props.text }
    </a>
  );
}

export default Button;
