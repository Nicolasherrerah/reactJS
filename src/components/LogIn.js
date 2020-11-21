import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logIn } from '../store/actions/authActions'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class LogIn extends Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = (e) =>{
        let value = e.target.value; 
        let name = e.target.id; 
        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.logIn(this.state);
        this.setState({
            email: "",
            password: ""
        })
        e.target.reset();
    }

    render() {
        if(this.props.uid){
            return <Redirect to="/"/>
        }
        return (
            <div className="columns is-align-items-center is-justify-content-center">
                <br/>
                <form className="column is-one-third box has-background-light m-6" onSubmit={this.handleSubmit}>
                    <h3 className="title">Log in</h3>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Enter email" id="email" onChange={this.handleChange}/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="password" placeholder="Create password" id="password" onChange={this.handleChange}/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div className="control has-text-centered">
                        <input className="button is-link is-outlined is-fullwidth" type="submit" value="Log in"/>
                    </div>
                    <div className="has-text-black mt-2">
                        Don't have an account? <Link to="/sign-up">Sign up!</Link>
                    </div>
                </form>
            </div>
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
    return {
        logIn: (credentials) =>{ dispatch(logIn(credentials));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LogIn) 
