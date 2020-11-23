import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        console.log(toggle)
        setToggle(!toggle)
    }

    const navClass = toggle ? 'is-active' : ''; 

    return(
    <nav className="navbar is-dark">
        <div className="navbar-brand ml-3 pl-3 mr-3 has-text-warning">
            <span className="icon is-large" ><i className="fas fa-3x fa-kiwi-bird"></i></span>   
            <a role="button" className={`${navClass} navbar-burger burger`} aria-label="menu" aria-expanded="false" data-target="navbarMenu" href="#" onClick={handleClick}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>            
        </div>
        <div className={`${navClass} navbar-menu has-background-link-light`} id="navbarMenu">
            <div className="navbar-start ml-5">
                <NavLink to="/" className="navbar-item is-size-4">Home</NavLink>
                <NavLink to="/manga" className="navbar-item is-size-4">Manga</NavLink>
                <NavLink to="/anime" className="navbar-item is-size-4">Anime</NavLink>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    </nav> 
    )
}

export default Navbar; 
