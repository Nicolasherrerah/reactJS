import React from 'react'; 
import AnimeList from './AnimeList';
import MangaList from './MangaList'
import { useSelector } from 'react-redux';


function HomePage() {

  const favMangas = useSelector(state => state.mangas).filter(manga => manga.favorite)
  const favAnime = useSelector(state => state.anime).filter(anime => anime.favorite)

  return (
    <div className="container">
      <br/>
      <h1 className="title is-1 has-text-centered">Favorites</h1>
      <h2 className="subtitle is-2">Manga</h2>
      <MangaList mangas={favMangas}/>
      <h2 className="subtitle is-2">Anime</h2>
      <AnimeList anime={favAnime}/>
    </div>
  )
}

export default HomePage
