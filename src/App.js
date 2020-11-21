import React, {Component} from 'react'; 
import Navbar from './components/Navbar'
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import MangaPage from './components/manga/MangaPage';
import AnimePage from './components/anime/AnimePage';
import { connect, useSelector } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { isLoaded} from 'react-redux-firebase'



function AuthIsLoaded({ children }){
  const auth = useSelector(state => state.firebase.auth);

  if (!isLoaded(auth)) {
    return (
      <div className="hero is-fullheight-with-navbar is-justify-content-center is-align-items-center">
        <div>
          <p className="title is-1">Loading... </p> 
        </div>
      </div>
      )
    }
  else if (!auth.uid) {
    return (
      <Redirect to="/log-in"/>
    )
  }
  return children;
}

class App extends Component{
  
  render(){
    return (
      <BrowserRouter>
          <div>
            <Navbar/>
            <AuthIsLoaded>
              <Route exact path='/' component={HomePage}/>
              <Route path='/manga' component={MangaPage}/>
              <Route path='/anime' component={AnimePage}/>
            </AuthIsLoaded>
            <Route path='/sign-up' component={SignUp}/>
            <Route path='/log-in' component={LogIn}/>
          </div>
      </BrowserRouter>
  )}
}


const mapStateToProps = (state) => {
  //console.log(state)
  return {
      showAddForm: state.showAddForm
  }
}

export default connect(mapStateToProps)(App)
