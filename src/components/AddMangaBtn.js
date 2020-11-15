import React from 'react'
import { connect } from 'react-redux';

class AddMangaBtn extends React.Component{
    
render(){    
    
    const handleClick = () =>{
        this.props.toggleForm(true);
      }
    
    return(
        <a className="icon is-large addBtn is-pulled-right mr-4" onClick={handleClick} href="#modal" ><i className="fas fa-3x fa-plus-circle"></i></a>
    )    
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleForm: (bool) => { dispatch({type: 'TOGGLE_FORM', showAddForm: bool}) }
    }
}

export default connect(null, mapDispatchToProps)(AddMangaBtn); 
