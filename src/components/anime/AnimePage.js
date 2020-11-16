import React, {Component} from 'react'; 
import AnimeList from './AnimeList';
import AddAnime from './AddAnime'
import AddBtn from '../AddBtn'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'



class AnimePage extends Component{

  render(){

    const anime = this.props.anime;
    return (
        <div>
          <br/>
          <h1 className="title is-1 has-text-centered">Following</h1>
          {anime && <AnimeList anime={this.props.anime}/>}
          <AddAnime showAddForm={this.props.showAddForm}/>
          {!this.props.showAddForm && <AddBtn/>}
        </div>
  )}
}


const mapStateToProps = (state) => {
  const anime = state.firestore.ordered.animes;
  //console.log(state)
  return {
      showAddForm: state.animeReducer.showAddForm,
      anime: anime
  }
}

export default  compose(
  connect(mapStateToProps),
  firestoreConnect( () => ['animes'])
)(AnimePage);
