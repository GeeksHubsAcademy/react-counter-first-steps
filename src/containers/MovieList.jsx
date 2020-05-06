import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MovieList = () => {
    const [movies, setmovies] = useState([]);
    useEffect(() => {//componentDidMount() equivalente
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES')//en axios en res.data esta el body
            .then(res => setmovies(res.data.results))
            .catch(console.error)
    }, []);
    return (
        <div>
            {movies.map(movie => <div key={movie.id}>
                <h3>{movie.title}</h3>
                <img src={'https://image.tmdb.org/t/p/w185' + movie.poster_path} />
            </div>)}
        </div>
    )
}
export default MovieList