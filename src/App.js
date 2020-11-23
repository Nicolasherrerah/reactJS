import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage';
import MangaPage from './components/MangaPage';
import AnimePage from './components/AnimePage';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Route exact path='/' component={HomePage}/>
        <Route path='/manga' component={MangaPage}/>
        <Route path='/anime' component={AnimePage}/>
      </div>
    </BrowserRouter>
  )
}

export default App

