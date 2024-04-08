import './App.css';
import {Routes, Route, NavLink} from "react-router-dom"
import Homepage from "./pages/Homepage.jsx";
import Page1 from "./pages/Page1.jsx";

function App() {

  return (
    <>
      <nav>
        <NavLink style={({isActive}) => {
          return isActive ? {color: 'blue'} : {}
        }} to={'/'} >Homepage</NavLink>
        <NavLink style={({isActive}) => {
          return isActive ? {color: 'purple'} : {}
        }} to={'/page1'} >Page1</NavLink>
      </nav>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={'/page1'} element={<Page1 />} />
      </Routes>
    </>
  )
}

export default App