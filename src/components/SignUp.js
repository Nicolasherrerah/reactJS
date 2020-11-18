import React, { Component } from 'react'
import { signUp } from '../store/actions/authActions'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class SignUp extends Component {

    state = {
        name: "",
        username: "",
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
        this.props.signUp(this.state);
        this.setState({
            name: "",
            username: "",
            email: "",
            password: ""
        })
        e.target.reset();
    }


    render() {
        if (this.props.uid) {
            return(
            <Redirect to="/"/>
            )
        }
        return (
            <div className="container">
                <br/>
                <form className="box" onSubmit={this.handleSubmit}>
                    <h3 className="title has-text-centered">Sign up</h3>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control has-icons-left">
                            <input className="input" type="text" placeholder="Your name" id="name" onChange={this.handleChange}/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-fingerprint"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="text" placeholder="Create username" id="username" onChange={this.handleChange}/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>
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
                        <input className="button is-primary" type="submit" value="Create account"/>
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
        signUp: (credentials) =>{ dispatch(signUp(credentials));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp) 
