import React, { useContext } from 'react';
import EstudioContext from '../context/EstudioContext';
import pages from '../services/helper';

export default function Paginator({ value }) {
  const {setCard1, setCard2, setCard3} = useContext(EstudioContext);

  const changeCards = () => {
    const [cardNum1, cardNum2, cardNum3] = pages[value - 1];
    setCard1(cardNum1);
    setCard2(cardNum2);
    setCard3(cardNum3);
  };

  return (
    <button
      onClick={changeCards}
    >
      { value }
    </button>
  );
}
