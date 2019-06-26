import React from 'react';

const imageStyle = {
    //maxHeight: "350px",
    margin: "auto",
    display: "block"
};
const titleDiv = {
    fontSize: "22px",
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "50px",
    background: "#00838f", 
    opacity: ".8",
    padding: "0, 5%, 30px, 5%",
    color: "#FFF"
};


const MoviesList = props => {
    /*  the code commented out but it can be used to display a list of movies
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
                <div key = {movie.id} className="col m4 l3">
                    <div className="card medium z-depth-1 hoverable">
                        <div className="card-image">
                            <img className="responsive-img" alt={movie.title} style={imageStyle} src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
                            <span className="card-title" style={titleDiv}>{movie.title}</span>
                        </div>
                        <div className="card-content">
                            <h6>Popularity Rating: {movie.vote_average}</h6>
                            <p className="truncate">{movie.overview}</p>
                        </div>
                        <div className="card-action">
                            <a className =" teal-text  text-lighten-1" href="#">Click for details</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MoviesList;