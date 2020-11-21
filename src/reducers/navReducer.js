const initState = {
    toggleNav: false
}

const navReducer = (state = initState, action) =>{
    if(action.type === 'TOGGLE_NAV'){
        return {
        ...state,
        toggleNav: action.toggleNav
        }
    }
    return state;
}

export default navReducer;