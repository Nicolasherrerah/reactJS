import React, {useCallback} from 'react'
import Anime from './Anime';
import { useDispatch } from 'react-redux';
import { UpdateAnimeChapter } from '../actions/allActions'
import { FavoriteAnime } from '../actions/allActions'

function AnimeList({anime}) {
        
    const dispatch = useDispatch();

    const updateChapter = useCallback(
        (chapter, id) => dispatch(UpdateAnimeChapter(chapter, id))
    )

    const isFavorite = useCallback(
        (bool, id) => dispatch(FavoriteAnime(bool, id))
    )

    const list = anime;
    const animeList = list.length ? (        
        list.map(anime => {
            //console.log(manga);
            return (
                <Anime anime={anime} key={anime.id} updateChapter={updateChapter} isFavorite={isFavorite}/>
            ) 
        })
    ) : ( <p className="is-size-4 has-text-centered"> Add anime to see information </p> );


    return (
        <div className="box container is-shadowless has-background-link-light">
            {animeList}
        </div>
    )
}

export default AnimeList
