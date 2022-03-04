import React, { useContext } from 'react';
import EstudioContext from '../context/EstudioContext';

export default function Cards() {
  const { card1, card2, card3 } = useContext(EstudioContext);

  return (
    <div>
      <div>{`Este é o Card${card1}`}</div>
      <div>{`Este é o Card${card2}`}</div>
      <div>{`Este é o Card${card3}`}</div>
    </div>
  );
}
