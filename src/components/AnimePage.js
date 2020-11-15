import React, {Component} from 'react'; 
import AnimeList from './AnimeList';
import AddAnime from './AddAnime'
import AddMangaBtn from './AddMangaBtn'
import { connect } from 'react-redux';



class AnimePage extends Component{

  render(){
    return (
        <div>
          <br/>
          <h1 className="title is-1 has-text-centered">Following</h1>
          <AnimeList anime={this.props.anime}/>
          <AddAnime showAddForm={this.props.showAddForm}/>
          {!this.props.showAddForm && <AddMangaBtn/>}
        </div>
  )}
}


const mapStateToProps = (state) => {
  //console.log(state)
  return {
      showAddForm: state.showAddForm,
      anime: state.anime
  }
}

export default connect(mapStateToProps)(AnimePage)
