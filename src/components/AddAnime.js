import { useDispatch} from 'react-redux';
import React, {useState} from 'react'
import {addAnime} from '../actions/allActions'

function AddAnime( {showAddForm} ) {

    const [newAnime, setNewAnime] = useState('');
    const dispatch = useDispatch();

    const addNewAnime = (anime) => {
        anime.id = Math.random();
        dispatch(addAnime(anime))
    }

    const toggleForm = () =>{
        dispatch({type: 'TOGGLE_FORM'})
    }

    const handleChange = (e) =>{
        let value = e.target.value; 
        let name = e.target.name; 
        setNewAnime((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addNewAnime(newAnime);
        setNewAnime('')
        e.target.reset();
        toggleForm(false)
    }

    if (showAddForm) {
        return(
            <div>
                <div className="modal" id="modal">
                    <div className="modal-background"></div>
                    <div className="modal-content box">
                        <h5 className="title has-text-centered">New anime</h5>
                        <form onSubmit={handleSubmit} className="container">
                            <div>
                                <div>
                                    <label htmlFor="title">TITLE </label>
                                    <input className="input" type="text" onChange={handleChange} name="title" id="title" required/>
                                </div>
                                <div>
                                    <label htmlFor="chapter">CHAPTER </label>
                                    <input className="input" type="number" onChange={handleChange} name="chapter" id="chapter" required/>
                                </div>
                                <div>
                                    <label htmlFor="rating">RATING </label>
                                    <input className="input" type="number" onChange={handleChange} name="rating" id="rating" required/>
                                </div>
                                <button className="button is-danger is-outlined is-pulled-right cancel" onClick={toggleForm} >CANCEL</button>
                                <input className="button is-primary is-outlined is-pulled-right add" type="submit" value="ADD"/>
                            </div>
                        </form>
                    </div>
                    <button className="modal-close is-large" aria-label="close" onClick={toggleForm}></button>
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

export default AddAnime
