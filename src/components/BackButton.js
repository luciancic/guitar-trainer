import React from 'react';

function BackButton({back}) {
  return (
    <svg className="back" onClick={back} width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35.5" cy="35.5" r="35.5" fill="#F2AAAA"/>
      <line x1="53.6538" y1="16" x2="53.6538" y2="53.8462" stroke="black" stroke-width="3"/>
      <line x1="48.0385" y1="16" x2="48.0385" y2="53.8462" stroke="black"/>
      <line x1="54" y1="16.5" x2="18" y2="16.5" stroke="black"/>
      <line x1="54" y1="25.7308" x2="18" y2="25.7308" stroke="black"/>
      <line x1="54" y1="34.9615" x2="18" y2="34.9615" stroke="black"/>
      <line x1="54" y1="44.1923" x2="18" y2="44.1923" stroke="black"/>
      <line x1="54" y1="53.4231" x2="18" y2="53.4231" stroke="black"/>
      <circle cx="42.4615" cy="30.3077" r="2.30769" fill="black"/>
      <circle cx="42.4615" cy="39.5385" r="2.30769" fill="black"/>
    </svg>
  )
}

export default BackButton
