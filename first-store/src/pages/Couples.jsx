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
    const dragonObject = dragons.find(dragon => dragon.id === selectedDragon);
    const chevalierObject = chevaliers.find(chevalier => chevalier.id === selectedChevalier);

      dispatch(coupleAdd({ dragonId: dragonObject , chevalierId: chevalierObject }));
      console.log(couples)
      console.log(selectedDragon)
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
    
      </div>
    </div>
    
  );
}

export default Couples;