import React from 'react'
import Manga from './Manga';
import { connect } from 'react-redux';

class Mangas extends React.Component{
render(){   
    const mangas = this.props.mangas;
    const mangaList = mangas.length ? (        
        mangas.map(manga => {
            //console.log(manga);
            return (
                <Manga manga={manga} key={manga.id} updateChapter={this.props.updateChapter} isFavorite={this.props.isFavorite}/>
            ) 
        })
    ) : ( <p className="is-size-4 has-text-centered"> Add manga to see information </p> );


    return (
        <div className="box container is-shadowless has-background-link-light">
            {mangaList}
        </div>
    )
}}



const mapDispatchToProps = (dispatch) => {
    return {
        updateChapter: (chapter, id) => { dispatch({type: 'UPDATE_MANGA_CHAPTER', mangaChapter: chapter, id}) },
        isFavorite: (bool, id) => {dispatch({type: 'UPDATE_FAVORITE_MANGA', favorite: bool, id})}
    }
}

export default connect(null, mapDispatchToProps)(Mangas)
