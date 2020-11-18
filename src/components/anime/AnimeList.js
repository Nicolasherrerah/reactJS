import React from 'react'
import Anime from './Anime';
import { UpdateAnimeChapter } from '../../store/actions/Actions'
import { FavoriteAnime } from '../../store/actions/Actions'
import { connect } from 'react-redux';

class AnimeList extends React.Component{
render(){   
    const list = this.props.anime;
    const animeList = list.length ? (        
        list.map(anime => {
            //console.log(anime);
            return (
                <Anime anime={anime} key={anime.id} updateChapter={this.props.updateChapter} isFavorite={this.props.isFavorite}/>
            ) 
        })
    ) : ( <p className="is-size-4 has-text-centered"> Add anime to see information </p> );


    return (
        <div className="box container is-shadowless has-background-link-light">
            {animeList}
        </div>
    )
}}


const mapDispatchToProps = (dispatch) => {
    return {
        updateChapter: (chapter, id) => { dispatch(UpdateAnimeChapter(chapter, id)) },
        isFavorite: (bool, id) => {dispatch(FavoriteAnime( bool, id ))}

    }
}

export default connect(null, mapDispatchToProps)(AnimeList)
