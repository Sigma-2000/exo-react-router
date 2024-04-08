import React from 'react';
import {NavLink} from "react-router-dom";

const checkIsActive = ({isActive}) => {
    return isActive ? {
        color: 'orange'
    } : {}
}
const NavBar = () => {
    return (
        <nav>
            <NavLink style={checkIsActive} to={'/'}>Accueil</NavLink>
            <NavLink style={checkIsActive} to={'/add-post'}>Ajouter un post</NavLink>
        </nav>
    );
};

export default NavBar;