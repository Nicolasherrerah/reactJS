const authReducer = (state= {}, action) =>{
    if (action.type === 'LOG_IN') {
        return state;
    }
    if (action.type === 'LOG_IN_ERROR') {
        return action.error;
    }
    if (action.type === 'LOG_OUT') {
        return state
    }
    if (action.type === 'LOG_OUT_ERROR') {
        return action.error;
    }
    if (action.type === 'SIGN_UP') {
        return state;
    }
    if (action.type === 'SIGN_UP_ERROR') {
        return action.error;
    }
};
