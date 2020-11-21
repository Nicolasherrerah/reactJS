import React from 'react'
import Manga from './Manga';
import { UpdateMangaChapter } from '../../store/actions/Actions'
import { FavoriteManga } from '../../store/actions/Actions'
import { deleteManga } from '../../store/actions/Actions'
import { connect } from 'react-redux';

class Mangas extends React.Component{
render(){   
    const mangas = this.props.mangas;
    const mangaList = mangas.length ? (        
        mangas.map(manga => {
            //console.log(manga);
            return (
                <Manga manga={manga} key={manga.id} updateChapter={this.props.updateChapter} isFavorite={this.props.isFavorite} deleteManga={this.props.deleteManga} />
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
        updateChapter: (chapter, id) => { dispatch(UpdateMangaChapter(chapter, id)) },
        isFavorite: (bool, id) => {dispatch(FavoriteManga( bool, id ))},
        deleteManga: (id) => {dispatch(deleteManga( id ))}
    }
}

export default connect(null, mapDispatchToProps)(Mangas)
