import { useDispatch} from 'react-redux';
import React, {useState} from 'react'
import {addManga} from '../actions/allActions'

function AddManga( {showAddForm} ) {

    const [newManga, setNewManga] = useState('');
    const dispatch = useDispatch();

    const addNewManga = (manga) => {
        manga.id = Math.random();
        dispatch(addManga(manga))
    }

    const toggleForm = () =>{
        dispatch({type: 'TOGGLE_FORM'})
    }

    const handleChange = (e) =>{
        let value = e.target.value; 
        let name = e.target.name; 
        setNewManga((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addNewManga(newManga);
        setNewManga('')
        e.target.reset();
        toggleForm(false)
    }

    if (showAddForm) {
        return(
            <div>
                <div className="modal" id="modal">
                    <div className="modal-background"></div>
                    <div className="modal-content box">
                        <h5 className="title has-text-centered">New manga</h5>
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

export default AddManga

