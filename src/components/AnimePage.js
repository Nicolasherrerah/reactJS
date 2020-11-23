import React from 'react'; 
import AnimeList from './AnimeList';
import AddAnime from './AddAnime'
import AddMangaBtn from './AddMangaBtn'
import { useSelector } from 'react-redux';

function AnimePage() {

  const anime = useSelector(state => state.anime)
  const showAddForm = useSelector(state => state.showAddForm)

  return (
    <div>
      <br/>
      <h1 className="title is-1 has-text-centered">Following</h1>
      <AnimeList anime={anime}/>
      <AddAnime showAddForm={showAddForm}/>
      {!showAddForm && <AddMangaBtn/>}
    </div>
  )
}

export default AnimePage

