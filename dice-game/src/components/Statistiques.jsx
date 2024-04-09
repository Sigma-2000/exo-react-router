
import React from 'react';
import { useDiceContext } from '../utils/context/diceContext';
//import { useOutletContext } from 'react-router-dom';

const Statistiques = () => {
  const {state} = useDiceContext();
  //const { state: {count} } = useOutletContext();
  return (
    <div>
      <p>Résultats : {state.count}</p>
      
    </div>
  );
};

export default Statistiques;