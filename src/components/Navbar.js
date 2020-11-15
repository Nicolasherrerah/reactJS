import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () =>{
    return(
        <nav className="navbar is-dark">
            <div className="navbar-brand ml-3 mt-2 pl-3 has-text-warning">
                <span className="icon is-large" ><i className="fas fa-3x fa-kiwi-bird"></i></span>                
            </div>
            <div className="navbar-start ml-5">
                <NavLink to="/" className="navbar-item is-size-4">Home</NavLink>
                <NavLink to="/manga" className="navbar-item is-size-4">Manga</NavLink>
                <NavLink to="/anime" className="navbar-item is-size-4">Anime</NavLink>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <a className="button is-primary">Log out</a>
                </div>
            </div>

        </nav> 
    )
}

export default Navbar; 
