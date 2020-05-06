import React, { Component } from 'react'
import axios from 'axios'

class MovieList extends Component {
    constructor(props){
        super(props)
        this.state={
            movies:[]
        }
    }
    componentDidMount() {//componentDidMount() equivalente
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES')//en axios en res.data esta el body
            .then(res => this.setState({movies:res.data.results}))
            .catch(console.error)
    }
    render(){
        return (
            <div>
                {this.state.movies.map(movie => <div>
                    <h3>{movie.title}</h3>
                    <img src={'https://image.tmdb.org/t/p/w185' + movie.poster_path} />
                </div>)}
            </div>
        )
    }
}
export default MovieList