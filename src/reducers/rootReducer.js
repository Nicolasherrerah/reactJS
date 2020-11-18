import mangaReducer from './mangaReducer'
import animeReducer from './animeReducer'
import authReducer from './authReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    mangaReducer,
    animeReducer,
    authReducer
});

export default rootReducer;