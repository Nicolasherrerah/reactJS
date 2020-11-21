import React from 'react';


function Anime({anime, updateChapter, isFavorite, deleteAnime}){

    function chapterChange(e){
        updateChapter(e.target.value, anime.id);
    }
    
    function changeFavorite(){
        isFavorite(!anime.favorite, anime.id)
    }

    function handleDelete(){
        deleteAnime(anime.id)
    }

    return (
        <div className="box" key={anime.id}>
            <div className="has-text-right">
                <h6>
                    <span className="icon has-text-warning">
                        <i className="fas fa-star"></i>
                    </span>
                    {anime.rating}/10
                </h6>
             </div>

            <h5 className="title">{anime.title}</h5>
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
                    <div className="level-item"><input className="input chapter" type="number" defaultValue={anime.chapter} onChange={chapterChange}/></div> 
                </div>
                <div className="level-right">
                    <div className="level-item">
                        {anime.favorite && <button className="icon button has-text-danger fav" onClick={changeFavorite}><i className="fas fa-heart"></i></button>}
                        {!anime.favorite && <button className="icon button is-black has-text-white" onClick={changeFavorite}><i className="fas fa-heart"></i></button>}
                    </div>
                </div>
            </div>
        </div>
    ) 
}



export default Anime
