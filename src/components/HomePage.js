import React, {Component} from 'react'; 
import AnimeList from './AnimeList';
import MangaList from './MangaList'
import { connect } from 'react-redux';



class HomePage extends Component{

  render(){
    
    const favMangas = this.props.mangas.filter(manga => manga.favorite)
    const favAnime = this.props.animeList.filter(anime => anime.favorite)

    return ( 
        <div className="container">
          <br/>
          <h1 className="title is-1 has-text-centered">Favorites</h1>
          <h2 className="subtitle is-2">Manga</h2>
          <MangaList mangas={favMangas}/>
          <h2 className="subtitle is-2">Anime</h2>
          <AnimeList anime={favAnime}/>
        </div>
  )}
}


const mapStateToProps = (state) => {
  //console.log(state)
  return {
      showAddForm: state.showAddForm,
      mangas: state.mangas,
      animeList: state.anime
  }
}

export default connect(mapStateToProps)(HomePage)
