import React, {Component} from 'react'; 
import { connect } from 'react-redux';

class AddAnime extends Component {

    state = {
        title: "",
        chapter: 0,
        rating: 0,
        favorite: false
    }

    handleChange = (e) =>{
        let value = e.target.value; 
        let name = e.target.name; 
        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addAnime(this.state);
        this.setState({
            title: "",
            chapter: 0,
            rating: 0
        })
        e.target.reset();
        this.props.toggleForm(false)
    }

    handleCancel = () =>{
        this.props.toggleForm(false);
    }

    render(){
        const showAddForm = this.props.showAddForm;

        if (showAddForm) {
            return(
                <div>
                <div className="modal" id="modal">
                    <div className="modal-background"></div>
                    <div className="modal-content box">
                        <h5 className="title has-text-centered">New Anime</h5>
                        <form onSubmit={this.handleSubmit} className="container">
                            <div>
                                <div>
                                    <label htmlFor="title">TITLE </label>
                                    <input className="input" type="text" onChange={this.handleChange} name="title" id="title" required/>
                                </div>
                                <div >
                                    <label htmlFor="chapter">CHAPTER </label>
                                    <input className="input" type="number" onChange={this.handleChange} name="chapter" id="chapter" required/>
                                </div>
                                <div>
                                    <label htmlFor="rating">RATING </label>
                                    <input className="input" type="number" onChange={this.handleChange} name="rating" id="rating" required/>
                                </div>
                                <button className="button is-danger is-outlined is-pulled-right cancel" onClick={this.handleCancel} >CANCEL</button>
                                <input className="button is-primary is-outlined is-pulled-right add" type="submit" value="ADD"/>
                            </div>
                        </form>
                    </div>
                    <button className="modal-close is-large" aria-label="close" onClick={this.handleCancel}></button>
                </div>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        toggleForm: (bool)=>{ dispatch({type: 'TOGGLE_FORM', showAddForm: bool}) },
        addAnime: (anime) =>{
            anime.id = Math.random();
            dispatch({type: 'ADD_ANIME', anime: anime});
        }
    }
}

export default connect(null, mapDispatchToProps)(AddAnime)
