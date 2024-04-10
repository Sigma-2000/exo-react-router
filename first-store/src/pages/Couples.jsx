import {selectDragons, selectChevalier,selectCouple} from "../store/selectors/index.js";
import { useDispatch,useSelector} from 'react-redux'
import {useState} from 'react'
import {coupleAdd} from '../store/action/index.js'

function Couples() {
  const dispatch = useDispatch()
  const dragons = useSelector(selectDragons)
  const chevaliers =useSelector(selectChevalier)
  const couples = useSelector(selectCouple)
  const [selectedDragon, setSelectedDragon] = useState('');
  const [selectedChevalier, setSelectedChevalier] = useState('');
  
  const handleCreateCouple = () => {
    if (selectedDragon && selectedChevalier) {
    const dragonObject = dragons.find(dragon => dragon.id === parseInt(selectedDragon));
    const chevalierObject = chevaliers.find(chevalier => chevalier.id === parseInt(selectedChevalier));
      console.log(dragonObject)
      console.log(dragons)
      console.log(selectedDragon)
    dispatch(coupleAdd({ dragon: dragonObject , chevalier: chevalierObject }));
      console.log(couples)
    }
  };

  return (
    <div>
      <p>Créer des couples de dragon et de chevalier</p>
      <div>
        <label>Dragon :</label>
        <select value={selectedDragon} onChange={e => setSelectedDragon(e.target.value)}>
          <option value="">Sélectionnez un dragon</option>
          {dragons.map(dragon => (
            <option key={dragon.id} value={dragon.id}>{dragon.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Chevalier :</label>
        <select value={selectedChevalier} onChange={e => setSelectedChevalier(e.target.value)}>
          <option value="">Sélectionnez un chevalier</option>
          {chevaliers.map(chevalier => (
            <option key={chevalier.id} value={chevalier.id}>{chevalier.name}</option>
          ))}
        </select>
      </div>
      <button onClick={handleCreateCouple}>Créer le couple</button>
      <div>
      <h2>Couples Créés</h2>
      {couples.length > 0 ? (
        couples.map((couple, index) => (
      <div key={index}>
        <p>Dragon: {couple.dragon.name} - Chevalier: {couple.chevalier.name}</p>
      </div>
      ))) : (<p>Aucun couple dans la liste</p>)}
      </div>
    </div>
    
  );
}

export default Couples;