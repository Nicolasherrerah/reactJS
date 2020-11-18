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

export const FavoriteManga = (bool, id) =>{
    return (dispatch, getState, {getFirebase}) =>{
        const firestore = getFirebase().firestore();
        firestore.collection('mangas').doc(id).update({
            favorite: bool
        }).then(()=>{
            dispatch({type: 'UPDATE_FAVORITE_MANGA', favorite: bool, id})
        }).catch((err) => {
            dispatch({type: 'UPDATE_FAVORITE_MANGA_ERROR', err})
        });
}}

export const UpdateMangaChapter = (chapter, id) =>{
    return (dispatch, getState, { getFirebase }) =>{
        const firestore = getFirebase().firestore();
        firestore.collection('mangas').doc(id).update({
            chapter
        }).then(()=>{
            dispatch({type: 'UPDATE_MANGA_CHAPTER', mangaChapter: chapter, id})
        }).catch((err) => {
            dispatch({type : 'UPDATE_MANGA_CHAPTER_ERROR', err})
        })
}}

export const UpdateAnimeChapter = (chapter, id) =>{
    return (dispatch, getState, { getFirebase }) =>{
        const firestore = getFirebase().firestore();
        firestore.collection('animes').doc(id).update({
            chapter
        }).then(()=>{
            dispatch({type: 'UPDATE_ANIME_CHAPTER', animeChapter: chapter, id})
        }).catch((err) => {
            dispatch({type : 'UPDATE_ANIME_CHAPTER_ERROR', err})
        })
}}

export const FavoriteAnime = (bool, id) =>{
    return (dispatch, getState, {getFirebase}) =>{
        const firestore = getFirebase().firestore();
        firestore.collection('animes').doc(id).update({
            favorite: bool
        }).then(()=>{
            dispatch({type: 'UPDATE_FAVORITE_ANIME', favorite: bool, id})
        }).catch((err) => {
            dispatch({type: 'UPDATE_FAVORITE_ANIME_ERROR', err})
        });
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

