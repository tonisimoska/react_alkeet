import React from 'react';

const Harj1 = (props) => {
  return (
    <div>
      <h3>Harjoitus 1</h3>
      <p>Nimi: {props.name} </p>
      <p>Sähköposti: {props.email} </p>
      <a href={props.link}>Google</a>
      <p>Aika: {props.time}</p>
    </div>
  );
}
export default Harj1;
