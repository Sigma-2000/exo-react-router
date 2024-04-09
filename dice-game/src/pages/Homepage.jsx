import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useDiceContext } from '../utils/context/diceContext';



const Homepage = () => {
  const { state, dispatch } = useDiceContext();
  const [repeatCount, setRepeatCount] = useState('100');

 

  const handleRollDice = () => {
   
    if (repeatCount.trim() === '' || isNaN(parseInt(repeatCount))) {
      setRepeatCount('100');
      return;
    }
    dispatch({ type: 'RESET' });

    for (let i = 0; i < parseInt(repeatCount); i++) {
      console.log('ok')
      dispatch({ type: 'ROLL_DICE' }); 
    }
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' }); 
    setRepeatCount(''); 
  };
  return (
    <div>
      <h1>Jeu de dés</h1>
      <nav>
      <NavLink to="/">Description</NavLink> 
      </nav>   
      <div>
        <button onClick={handleRollDice}>Lancer les dés</button>

        <label htmlFor="repeatCount">Nombre d'expériences : </label>
        <input 
          id="repeatCount" 
          value={repeatCount} 
          onChange={(e) => setRepeatCount(e.target.value)} 
        />
        <button onClick={handleReset}>Réinitialiser</button>
      </div>
      <div>
      <NavLink to="/statistique">Résultats</NavLink> 
      </div>
      <Outlet/>
    </div>
  );
};


export default Homepage;