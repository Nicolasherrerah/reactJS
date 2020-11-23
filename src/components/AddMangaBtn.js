import React from 'react'
import { useDispatch} from 'react-redux';


function AddMangaBtn() {

    const dispatch = useDispatch();
    const toggleForm = () =>{
        dispatch({type: 'TOGGLE_FORM'})
    }
    
    return(
        <a className="icon is-large addBtn is-pulled-right mr-4" onClick={toggleForm} href="#modal" ><i className="fas fa-3x fa-plus-circle"></i></a>
    ) 
}

export default AddMangaBtn

