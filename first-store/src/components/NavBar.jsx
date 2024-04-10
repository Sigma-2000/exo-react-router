import {NavLink} from "react-router-dom";

const checkIsActive = ({isActive}) => {
    return isActive ? {
        color: 'orange'
    } : {}
}

const NavBar = () => {
    return (
        <header>
            <nav>
                <NavLink style={checkIsActive} to={'/'}>Dragons</NavLink>
                <NavLink style={checkIsActive} to={'/chevaliers'}>Chevaliers</NavLink>
                <NavLink style={checkIsActive} to={'/couples'}>Couples</NavLink>
            </nav>
        </header>
    );
};

export default NavBar;