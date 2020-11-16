
export const addManga = (manga) =>{
    return (dispatch, getState, {getFirebase}) =>{
        const firestore = getFirebase().firestore();
        firestore.collection('mangas').add({
            ...manga
        }).then(()=>{
            dispatch({type: 'ADD_MANGA', manga})
        }).catch((err) => {
            dispatch({type: 'ADD_MANGA_ERROR', err})
        });
}};

const FavoriteManga = (bool, id) =>{
    return (dispatch, getState) =>{
    dispatch({type: 'UPDATE_FAVORITE_MANGA', favorite: bool, id})
}}

const UpdateMangaChapter = (chapter, id) =>{
    return (dispatch, getState) =>{
    dispatch({type: 'UPDATE_MANGA_CHAPTER', mangaChapter: chapter, id})
}}

const UpdateAnimeChapter = (chapter, id) =>{
    return (dispatch, getState) =>{
    dispatch({type: 'UPDATE_ANIME_CHAPTER', animeChapter: chapter, id})
}}

const FavoriteAnime = (bool, id) =>{
    return (dispatch, getState) =>{
        dispatch({type: 'UPDATE_FAVORITE_ANIME', favorite: bool, id})
}}

export const addAnime = (anime) =>{
    return (dispatch, getState, {getFirebase}) =>{
        const firestore = getFirebase().firestore();
        firestore.collection('animes').add({
            ...anime
        }).then(()=>{
            dispatch({type: 'ADD_ANIME', anime})
        }).catch((err) => {
            dispatch({type: 'ADD_ANIME_ERROR', err})
        });
}}

