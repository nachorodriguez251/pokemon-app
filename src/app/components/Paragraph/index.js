import React from 'react';
import './styles.css';

function Paragraph(props) {
  return (
    <div className="paragraph">
      <h2>{ props.title }</h2>
      <p>{ props.text }</p>
      { props.video
      && (
      <iframe
        title="video"
        width="100%"
        height="700"
        src="https://www.youtube.com/embed/Cp8GQ1sJFt4"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      ) }
    </div>
  );
}

export default Paragraph;
