import React, { Component } from 'react';
import './MovieList.css';

class MovieList extends Component {
  constructor(){
    super()
    this.state = {
      movieTitleInput: '',
      movieImageInput: '',
      movieList: [
        {
          movieTitle: 'To Wong Foo',
          image: 'https://upload.wikimedia.org/wikipedia/en/e/e9/Towongfoo.jpg'
        },
        {
          movieTitle: 'Naked Gun',
          image: 'https://resizing.flixster.com/yBsPcl95GwbgDUQvYJ3wuFTFsVw=/206x305/v2/https://flxt.tmsimg.com/assets/p11300_p_v10_ae.jpg'
        },
      ],
    }
  }

  handleMovieTitleInput(e){
    this.setState({ 
      movieTitleInput: e.target.value
    })
  }

  handleMovieImageInput(e) {
    this.setState({
      movieImageInput: e.target.value
    })
  }

  handleAddMovie(){
    this.setState({
      movieList: [
        { 
          movieTitle: this.state.movieTitleInput, 
          image: this.state.movieImageInput
        },
        ...this.state.movieList,
      ],
      movieTitleInput: '',
      movieImageInput: ''
    })
  }

  render(){
    const movieCards = this.state.movieList.map(element => {
      return(
        <section className="movie-card">
          <p>{element.movieTitle}</p>
          <img src={element.image}  alt={element.movieTitle} />
        </section>
      )
    })
    return (
      <div>
        <h1>MovieList</h1>
        <input
          onChange={(e) => this.handleMovieTitleInput(e)}
          placeholder="movie title"
          value={this.state.movieTitleInput}
          />
        <input 
          onChange={(e) => this.handleMovieImageInput(e)} 
          placeholder="movie image"
          value={this.state.movieImageInput}
          />
        <button onClick={() => this.handleAddMovie()}>add movie to list</button>
        <section className="movie-cards-container">
          {movieCards}
        </section>
      </div>
    )
  }
}

export default MovieList;
