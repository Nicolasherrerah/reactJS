import React from 'react'; 
import MangaList from './MangaList';
import AddManga from './AddManga'
import AddMangaBtn from './AddMangaBtn'
import { useSelector } from 'react-redux';

function MangaPage() {
  const mangas = useSelector(state => state.mangas);
  const showAddForm = useSelector(state => state.showAddForm);

  return (
    <div>
      <h1 className="title is-1 has-text-centered">Following</h1>
      <MangaList mangas={mangas}/>
      <AddManga showAddForm={showAddForm}/>
      {!showAddForm && <AddMangaBtn/>}
    </div>
  )
}

export default MangaPage

