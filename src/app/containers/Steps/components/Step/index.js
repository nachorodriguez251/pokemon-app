import React from 'react';
import './styles.css';

function index(props) {
  return (
    <div>
      <img
        className="roundImg"
        src={props.imgSource}
        alt={props.imgAlt}
      />
      <h3>{props.title}</h3>
      <p className="stepDesc">{props.desc}</p>
    </div>
  );
}

export default index;
