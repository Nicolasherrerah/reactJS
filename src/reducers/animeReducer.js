const initState = {
    anime: [],
    showAddForm: false
}

const animeReducer = (state = initState,  action) => {
    if (action.type === 'TOGGLE_FORM') {
        return{
            ...state,
            showAddForm: action.showAddForm
        }
    }
    if (action.type === 'ADD_ANIME'){
        //console.log(action);
        return{
            ...state,
            anime: [...state.anime, {...action.anime}]
        }
    }    
    if (action.type === 'DELETE_ANIME'){
        //console.log(action);
        return state
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

export default animeReducer;