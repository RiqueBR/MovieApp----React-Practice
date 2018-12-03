import React from 'react'

class Movie extends React.Component{
    render(){
        return (
            <div className="single-movie">
                <p className="movie-name"><a href={this.props.href}>{this.props.children}</a></p>
            </div>
        )
    }
}

export default Movie;