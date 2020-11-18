import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { logOut } from '../store/actions/authActions'

const Navbar = ({uid, logOut}) =>{

    if (uid) {
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
                        <NavLink to="/log-in" className="button is-dark" onClick={() => logOut()}>Log out</NavLink>
                    </div>
                </div>
            </nav> 
        )
    }
    else{
        return(
            <nav className="navbar is-dark">
                <div className="navbar-brand ml-3 mt-2 pl-3 has-text-warning">
                    <span className="icon is-large mr-3"><i className="fas fa-3x fa-kiwi-bird"></i></span>  
                    <span className="icon is-large mx-3"><i className="fas fa-3x fa-kiwi-bird"></i></span>                
                    <span className="icon is-large mx-3"><i className="fas fa-3x fa-kiwi-bird"></i></span>                
                    <span className="icon is-large mx-3"><i className="fas fa-3x fa-kiwi-bird"></i></span>                
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <NavLink to="/sign-up" className="button is-primary" >Sign up</NavLink>
                    </div>
                    <div className="navbar-item">
                        <NavLink to="/log-in" className="button is-dark" >Log in</NavLink>
                    </div>
                </div>
            </nav> 
        )
    }
}

const mapStateToProps = (state) => {
    const uid = state.firebase.auth.uid
    return {
        uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logOut : () => {dispatch(logOut())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar); 
