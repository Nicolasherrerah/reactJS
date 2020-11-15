import React, {Component} from 'react'; 
import MangaList from './MangaList';
import AddManga from './AddManga'
import AddMangaBtn from './AddMangaBtn'
import { connect } from 'react-redux';



class MangaPage extends Component{

  render(){
    return (
        <div>
          <br/>
          <h1 className="title is-1 has-text-centered">Following</h1>
          <MangaList mangas={this.props.mangas}/>
          <AddManga showAddForm={this.props.showAddForm}/>
          {!this.props.showAddForm && <AddMangaBtn/>}
        </div>
  )}
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
      showAddForm: state.showAddForm,
      mangas: state.mangas
  }
}

export default connect(mapStateToProps)(MangaPage)
