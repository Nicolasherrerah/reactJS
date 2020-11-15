const initState = {
    mangas: [],
    anime: [],
    showAddForm: false
}

const rootReducer = (state = initState,  action) => {
    if (action.type === 'TOGGLE_FORM') {
        return{
            ...state,
            showAddForm: action.showAddForm
        }
    }
    if (action.type === 'ADD_MANGA'){
        //console.log(action);
        return{
            ...state,
            mangas: [...state.mangas, {...action.manga}]
        }
    }
    if (action.type === 'ADD_ANIME'){
        //console.log(action);
        return{
            ...state,
            anime: [...state.anime, {...action.anime}]
        }
    }
    if (action.type === 'UPDATE_MANGA_CHAPTER') {
        let updatedManga = state.mangas.map( manga => 
            (manga.id === action.id ? Object.assign({}, manga, { ...manga, chapter: action.mangaChapter }) : manga)
        )
        console.log(updatedManga);
        return{
            ...state,
            mangas: updatedManga
        }
    }
    if (action.type === 'UPDATE_FAVORITE_MANGA'){
        let updatedManga = state.mangas.map( manga => 
            (manga.id === action.id ? Object.assign({}, manga, { ...manga, favorite: action.favorite }) : manga)
        )
        console.log(updatedManga);
        return{
            ...state,
            mangas: updatedManga
        }
    }
    if (action.type === 'UPDATE_ANIME_CHAPTER') {
        let updatedAnime = state.anime.map( anime => 
            (anime.id === action.id ? Object.assign({}, anime, { ...anime, chapter: action.animeChapter }) : anime)
        )
        console.log(updatedAnime);
        return{
            ...state,
            anime: updatedAnime
        }
    }
    if (action.type === 'UPDATE_FAVORITE_ANIME'){
        let updatedAnime = state.anime.map( anime => 
            (anime.id === action.id ? Object.assign({}, anime, { ...anime, favorite: action.favorite }) : anime)
        )
        console.log(updatedAnime);
        return{
            ...state,
            anime: updatedAnime
        }
    }
    return state;
}

export default rootReducer;