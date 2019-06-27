import React from 'react';
import { Link } from "react-router-dom";

const imageStyle = {
    margin: "auto",
    display: "block"
};
const titleDiv = {
    fontSize: "20px",
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "50px",
    background: "#00838f",
    opacity: ".85",
  /*   padding: "20px, 5%, 30px, 5%", */
    color: "#FFF"
};


const MoviesList = props => {

    /*  the code is commented out but it can be used to display a list of movies
    return (
      <ul className="list-group">
     {props.movies.map(movie => (
       <li className="list-group-item" key={movie.id}>
         {movie.title}
       </li>
     ))}
   </ul> */
    return (

        <div className="row">
            {props.movies.map(movie => (
                <div key={movie.id} className="col s12 m4 l3">
                    <div className="card medium z-depth-1 hoverable">
                        <div className="card-image">
                            <img className="responsive-img" alt={movie.title} style={imageStyle} src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
                            <span className="card-title" style={titleDiv}>{movie.title}</span>
                        </div>
                        <div className="card-content">
                            <h6>Popularity: {movie.popularity}</h6>
                            <p className="truncate">{movie.overview}</p>
                        </div>
                        <div>
                            <Link
                                className="card-action text-center teal-text text-lighten-1"
                                to={{ pathname: `/movie/${movie.id}` }}>
                                Click for details
                        </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MoviesList;