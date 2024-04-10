import {selectChevalierError, selectChevalierName, selectChevalier, selectChevalierAge} from "../store/selectors/index.js";
import {addChevalier, setChevalierError, setChevalierName, chevalierDelete, setChevalierAge} from "../store/action/index.js";
import {useDispatch, useSelector} from 'react-redux'

function Chevaliers(){
  const dispatch = useDispatch()

    const name = useSelector(selectChevalierName)
    const chevaliers = useSelector(selectChevalier)
    const error = useSelector(selectChevalierError)
    const age = useSelector(selectChevalierAge)
  

    const handleChange = (e) => {
        dispatch(setChevalierName(e.target.value))
    }
    const handleChangeAge = (e)=> {
      dispatch(setChevalierAge(e.target.value))
    }

    const handleChevalierSubmit = () => {
      if (name.trim() === '' || chevaliers.find((chevalier) => chevalier.name.toLowerCase() === name.toLowerCase().trim()) !== undefined) {
          dispatch(setChevalierError('invalid Data'))
          return;
      }
      if (!/^\d+$/.test(age.trim())) {
        dispatch(setChevalierError('Donnée invalide : l\'âge doit être numérique'));
        return;
      }
      dispatch(addChevalier());
  }

    const handleDeleteChevalier = (id)=>{
      dispatch(chevalierDelete(id))
    }

  return (
    <main>
      <header>
        <h1>Chevaliers List</h1>
          <p>Nombre de Chevaliers dans la liste : {chevaliers.length}</p>
      </header>
      <div>
        <div>
            {error !== "" && <p style={{color: "red"}}>{error}</p>}
          <p>Entrez le nom du chevalier</p>
          <input type={"text"} onChange={handleChange} value={name} />
          <p>Entrez son age</p>
          <input type={"text"} onChange={handleChangeAge} value={age} />
          <button onClick={handleChevalierSubmit}>Ajouter</button>
        </div>
        <div>
            {
                chevaliers.length > 0 ?
                chevaliers.map(chevalier => <div key={chevalier.id}> 
                {`${chevalier.name} à l'âge de ${chevalier.age} ans`}
                    <button onClick={() => handleDeleteChevalier(chevalier.id)}>X</button></div> )
                    :
                    <p>Aucun chevalier dans la liste</p>
            }
        </div>
        </div>
    </main>
  )
}

export default Chevaliers