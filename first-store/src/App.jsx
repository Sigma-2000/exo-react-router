import {useSelector, useDispatch} from "react-redux";
import './App.css'
import {selectDragonError, selectDragonName, selectDragons, selectDragonDelete} from "./store/selectors/index.js";
import {addDragon, setDragonError, setDragonName, dragonDelete} from "./store/action/index.js";

function App() {

    const dispatch = useDispatch()

    const name = useSelector(selectDragonName)
    const dragons = useSelector(selectDragons)
    const error = useSelector(selectDragonError)

    const handleChange = (e) => {
        dispatch(setDragonName(e.target.value))
    }

    const handleDragonSubmit = () => {
        if(name.trim() === '' || dragons.find((dragon) => dragon.name.toLowerCase() === name.toLowerCase()) !== undefined) {
            dispatch(setDragonError('Donnée invalide'))
            return;
        }
        dispatch(addDragon())
    }

    const handleDeleteDragon = (id)=>{
      dispatch(dragonDelete(id))
    }

  return (
    <main>
      <header>
        <h1>Dragon List</h1>
          <p>Nombre de dragons dans la liste : {dragons.length}</p>
      </header>
      <div>
        <div>
            {error !== "" && <p style={{color: "red"}}>{error}</p>}
          <input type={"text"} onChange={handleChange} value={name} />
          <button onClick={handleDragonSubmit}>Ajouter</button>
        </div>
        <div>
            {
                dragons.length > 0 ?
                    dragons.map(dragon => <div key={dragon.id}>{dragon.name} 
                    <button onClick={() => handleDeleteDragon(dragon.id)}>X</button></div> )
                    :
                    <p>Aucun dragon dans la liste</p>
            }
        </div>
      </div>
    </main>
  )
}

export default App