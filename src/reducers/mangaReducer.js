const initState = {
    mangas: [],
    showAddForm: false
}

const mangaReducer = (state = initState,  action) => {
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
    return state;
}

export default mangaReducer;