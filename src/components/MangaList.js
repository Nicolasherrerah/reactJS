import React from 'react'
import Manga from './Manga';
import { useDispatch } from 'react-redux';
import { UpdateMangaChapter } from '../actions/allActions'
import { FavoriteManga } from '../actions/allActions'



function MangaList({mangas}){
    
    const dispatch = useDispatch();

    const updateChapter = (chapter, id) => {
        dispatch(UpdateMangaChapter(chapter, id))
    }

    const isFavorite = (bool, id) => (
        dispatch(FavoriteManga(bool, id))
    )


    const mangaList = mangas.length ? (        
        mangas.map(manga => {
            //console.log(manga);
            return (
                <Manga manga={manga} key={manga.id} updateChapter={updateChapter} isFavorite={isFavorite}/>
            ) 
        })
    ) : ( <p className="is-size-4 has-text-centered"> Add manga to see information </p> );


    return (
        <div className="box container is-shadowless has-background-link-light">
            {mangaList}
        </div>
    )
}

export default MangaList



