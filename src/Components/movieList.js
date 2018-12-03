import React from 'react'
import Movie from './movie'

class MovieList extends React.Component{

    render(){

        const movieNodes = this.props.data.map(movie => {
            return (
                <Movie key={movie.id} href={movie.url}>{movie.name}</Movie>
            )
        })


        return(
         <div className="movie-list">
            {movieNodes}
         </div>
        )

    }
}

export default MovieList