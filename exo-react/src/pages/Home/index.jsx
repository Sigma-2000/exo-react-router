import React from 'react';
import {usePostContext} from "../../utils/context/postContext.jsx";
import {Link} from "react-router-dom";

const Home = () => {

    const {state, dispatch} = usePostContext()
   
  
    const handleDelete = (id) => {
      dispatch({ type: 'POST/DELETE', payload: {id} });
    };

    return (
        <div>
            <h1>Liste des posts</h1>
            {
                state.posts.length > 0 ?
                state.posts.map(post => (
                  <li key={post.id}>
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                    <button onClick={() => handleDelete(post.id)} className="button__Item">X</button>
                  </li>
                ))
                    :
                    <p>Aucun posts à afficher</p>
            }
        </div>
    );
};

export default Home;