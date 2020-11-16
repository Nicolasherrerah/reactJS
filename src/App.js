import React, {Component} from 'react'; 
import Navbar from './components/Navbar'
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import MangaPage from './components/manga/MangaPage';
import AnimePage from './components/anime/AnimePage';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'



class App extends Component{

  render(){
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Route exact path='/' component={HomePage}/>
          <Route path='/sign-up' component={SignUp}/>
          <Route path='/log-in' component={LogIn}/>
          <Route path='/manga' component={MangaPage}/>
          <Route path='/anime' component={AnimePage}/>
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
