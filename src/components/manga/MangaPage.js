import React, {Component} from 'react'; 
import MangaList from './MangaList';
import AddManga from './AddManga'
import AddBtn from '../AddBtn'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'



class MangaPage extends Component{

  
  render(){

    const mangas = this.props.mangas;

    return (
        <div>
          <br/>
          <h1 className="title is-1 has-text-centered">Following</h1>
          {mangas && <MangaList mangas={mangas}/>}
          <AddManga showAddForm={this.props.showAddForm}/>
          {!this.props.showAddForm && <AddBtn/>}
        </div>
  )}
}


const mapStateToProps = (state) => {
  const mangas = state.firestore.ordered.mangas;
  console.log(state)

  return {
      showAddForm: state.mangaReducer.showAddForm,
      mangas: mangas
  }
}

export default  compose(
  connect(mapStateToProps),
  firestoreConnect( () => ['mangas'])
)(MangaPage);
