
import React from 'react';
import { useDiceContext } from '../utils/context/diceContext';

const Statistiques = () => {
  const {state} = useDiceContext();
  return (
    <div>
      <p>Résultats : {state.count}</p>
      
    </div>
  );
};

export default Statistiques;