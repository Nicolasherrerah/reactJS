export const logIn = (credentials) =>{
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(()=>{
            dispatch({type: 'LOG_IN'})
        }).catch((err) => {
            dispatch({type: 'LOG_IN_ERROR', err})
        });
}};

export const logOut = () =>{
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(()=>{
            dispatch({type: 'LOG_OUT'})
        }).catch((err) => {
            dispatch({type: 'LOG_OUT_ERROR', err})
        });
}};

export const signUp = (credentials) =>{
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase();
        firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then(()=>{
            dispatch({type: 'SIGN_UP'})
        }).catch((err) => {
            dispatch({type: 'SIGN_UP_ERROR', err})
        });
}};



