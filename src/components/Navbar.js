import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { logOut } from '../store/actions/authActions'



const Navbar = ({uid, logOut, toggleNavbar, toggleNav}) =>{
    
    function handleLogOut(){
        logOut();
    }

    const handleClick = () =>{
        toggleNavbar(!toggleNav);
    }

    if (uid) {
        if(toggleNav){
            return(
                <nav className="navbar is-dark">
                    <div className="navbar-brand ml-3 pl-3 has-text-warning">
                        <span className="icon is-large mr-3"><i className="fas fa-3x fa-kiwi-bird"></i></span>  
                        <a role="button" className="navbar-burger burger is-active" aria-label="menu" aria-expanded="false" data-target="navbarMenu" onClick={handleClick}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>                
                    </div>
                    <div className="navbar-menu is-active has-background-link-light" id="navbarMenu">
                        <div className="navbar-start ml-5">
                            <NavLink to="/" className="navbar-item is-size-4">Home</NavLink>
                            <NavLink to="/manga" className="navbar-item is-size-4">Manga</NavLink>
                            <NavLink to="/anime" className="navbar-item is-size-4">Anime</NavLink>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item has-text-right">
                                <button className="button is-dark" onClick={handleLogOut}>Log out</button>
                            </div>
                        </div>
                    </div>
                </nav> 
            )
        }
        else{
            return(
                <nav className="navbar is-dark">
                    <div className="navbar-brand ml-3 pl-3 has-text-warning">
                        <span className="icon is-large mr-3"><i className="fas fa-3x fa-kiwi-bird"></i></span>  
                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu" onClick={handleClick}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>              
                    </div>
                    <div className="navbar-menu" id="navbarMenu">
                        <div className="navbar-start ml-5">
                            <NavLink to="/" className="navbar-item is-size-4">Home</NavLink>
                            <NavLink to="/manga" className="navbar-item is-size-4">Manga</NavLink>
                            <NavLink to="/anime" className="navbar-item is-size-4">Anime</NavLink>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <button className="button is-dark" onClick={handleLogOut}>Log out</button>
                            </div>
                        </div>
                    </div>
                </nav> 
            )
        }
    }
    else{
        if(toggleNav){
            return(
                <nav className="navbar is-dark">
                    <div className="navbar-brand ml-3 pl-3 has-text-warning">
                        <span className="icon is-large mr-3"><i className="fas fa-3x fa-kiwi-bird"></i></span>  
                        <span className="icon is-large mx-3"><i className="fas fa-3x fa-kiwi-bird"></i></span>                
                        <span className="icon is-large mx-3"><i className="fas fa-3x fa-kiwi-bird"></i></span>                  
                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu" onClick={handleClick}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>              
                    </div>
                    <div className="navbar-menu" id="navbarMenu">
                        <div className="navbar-start"></div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <NavLink to="/sign-up" className="button is-primary" >Sign up</NavLink>
                            </div>
                            <div className="navbar-item">
                                <NavLink to="/log-in" className="button is-dark" >Log in</NavLink>
                            </div>
                        </div>
                    </div>
                </nav> 
            )
        }
        else{
            return(
                <nav className="navbar is-dark">
                    <div className="navbar-brand ml-3 pl-3 has-text-warning">
                        <span className="icon is-large mr-3"><i className="fas fa-3x fa-kiwi-bird"></i></span>  
                        <span className="icon is-large mx-3"><i className="fas fa-3x fa-kiwi-bird"></i></span>                
                        <span className="icon is-large mx-3"><i className="fas fa-3x fa-kiwi-bird"></i></span>                
                        <a role="button" className="navbar-burger burger is-active" aria-label="menu" aria-expanded="false" data-target="navbarMenu" onClick={handleClick}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>                
                    </div>
                    <div className="navbar-menu is-active has-background-link-light" id="navbarMenu">
                        <div className="navbar-start"></div>
                        <div className="navbar-end">
                            <div className="level navbar-item">
                                <div className="level-left "></div>
                                <div className="level-right">
                                    <div className="level-item">   
                                        <NavLink to="/sign-up" className="button is-primary mx-2">Sign up</NavLink>
                                        <NavLink to="/log-in" className="button is-dark mx-2">Log in</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav> 
            )
        }
    }
}

const mapStateToProps = (state) => {
    const uid = state.firebase.auth.uid
    console.log(state)
    return {
        toggleNav: state.navReducer.toggleNav,
        uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logOut : () => {dispatch(logOut())},
        toggleNavbar: (bool) => {dispatch({type: 'TOGGLE_NAV', toggleNav: bool})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar); 
