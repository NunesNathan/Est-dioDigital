import React, { useState } from 'react';
import EstudioContext from '../context/EstudioContext';
import Cards from './Cards';
import Pagination from './Pagination';

export default function Main() {
  const [card1, setCard1] = useState(1);
  const [card2, setCard2] = useState(2);
  const [card3, setCard3] = useState(3);

  return (
    <main>
      <EstudioContext.Provider
        value={{
          card1,
          setCard1,
          card2,
          setCard2,
          card3,
          setCard3,
        }}
      >
        <Cards />
        <Pagination />
      </EstudioContext.Provider>
    </main>
  );
}
