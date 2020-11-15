import React, {Component} from 'react'; 
import Navbar from './components/Navbar'
import HomePage from './components/HomePage';
import MangaPage from './components/MangaPage';
import AnimePage from './components/AnimePage';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'



class App extends Component{

  render(){
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Route exact path='/' component={HomePage}/>
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
