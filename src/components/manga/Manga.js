import React from 'react';

function Manga({manga, updateChapter, isFavorite, deleteManga}){

    function chapterChange(e){
        updateChapter(e.target.value, manga.id);
    }

    function changeFavorite(){
        isFavorite(!manga.favorite, manga.id)
    }

    function handleDelete(){
        deleteManga(manga.id)
    }

    return (
        <div className="box" key={manga.id}>
             <div className="has-text-right">
                <h6>
                    <span className="icon has-text-warning">
                        <i className="fas fa-star"></i>
                    </span>
                    {manga.rating}/10
                </h6>
             </div>
            <h5 className="title">{manga.title}</h5>
            <div className="level mb-0">
                <div className="level-left"></div>
                  <div className="level-right">
                      <div className="level-item">
                        <button className="icon button has-text-danger has-background-white del" onClick={handleDelete}><i className="fas fa-trash-alt"></i></button>
                      </div>
                  </div>
            </div> 
            <div className="level">
                <div className="level-left">
                    <div className="level-item"><h6 className="subtitle">CHAPTER </h6></div>
                    <div className="level-item"><input className="input chapter" type="number" defaultValue={manga.chapter} onChange={chapterChange}/></div> 
                </div>
                <div className="level-right">
                    <div className="level-item">
                        {manga.favorite && <button className="icon button has-text-danger fav" onClick={changeFavorite}><i className="fas fa-heart"></i></button>}
                        {!manga.favorite && <button className="icon button is-black has-text-white" onClick={changeFavorite}><i className="fas fa-heart"></i></button>}
                    </div>
                </div>
            </div>
        </div>
    ) 
}



export default Manga
