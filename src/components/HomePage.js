import React, {Component} from 'react'; 
import AnimeList from './anime/AnimeList';
import MangaList from './manga/MangaList'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'



class HomePage extends Component{

  
  render(){


    if(Object.keys(this.props.status).length <= 1) {
        return(
          <div className="hero is-fullheight-with-navbar is-justify-content-center is-align-items-center">
            <div>
              <p className="title is-1">Loading... </p> 
            </div>
          </div>
        )
    }

    let favManga = this.props.mangas.filter(manga => manga.favorite)
    let favAnime = this.props.animeList.filter(anime => anime.favorite)

    if(this.props.uid){
    return ( 
      <div className="container">
        <br/>
        <h1 className="title is-1 has-text-centered">Favorites</h1>
        <h2 className="title is-2 ml-2 mt-2">Manga</h2>
        <MangaList mangas={favManga}/>
        <h2 className="title is-2 ml-2">Anime</h2>
        <AnimeList anime={favAnime}/>
        <br/>
      </div>
    )
  }
  else{
    return(
        <div id="back"></div>
      )
  }
}
}


const mapStateToProps = (state) => {
  const mangas = state.firestore.ordered.mangas;
  const anime = state.firestore.ordered.animes;
  const status = state.firestore.ordered;
  const uid = state.firebase.auth.uid

  console.log(state)

  return {
      showAddForm: state.mangaReducer.showAddForm,
      mangas: mangas,
      animeList: anime,
      uid,
      status
  }
}

export default  compose(
  connect(mapStateToProps),
  firestoreConnect( () => ['mangas', 'animes'])
)(HomePage);
