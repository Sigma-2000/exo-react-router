import './App.css';
import {Routes, Route, NavLink} from "react-router-dom"
import Home from "./pages/Home/index.jsx";
import AddPost from "./pages/AddPost/index.jsx";
import NavBar from "./components/NavBar/index.jsx";
import PostDetail from './pages/PostDetail/index.jsx';

function App() {

  return (
    <>
    <NavBar />
  <Routes>
    <Route path={'/'} element={<Home />} />
    <Route path={'/add-post'} element={<AddPost />} />
    <Route path="/post/:id" element={<PostDetail />} />
  </Routes>
</>
  )
}

export default App