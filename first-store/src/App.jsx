import './App.css'
import Dragons from "./pages/Dragons.jsx";
import NavBar from './components/NavBar.jsx';
import {Route, Routes} from "react-router-dom";
import Chevaliers from './pages/Chevaliers.jsx';

function App() {

    return(
      <div>
        <NavBar />
     <Routes>
        <Route path={'/'} element={<Dragons />}/>
        <Route path={'/chevaliers'} element={<Chevaliers />}/>
      </Routes>
      </div>
    )
     
}

export default App