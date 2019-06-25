import React from 'react';

const imageStyle = {
    //maxHeight: "350px",
    margin: "auto",
    display: "block"
  };

const MoviesList = props => {
    /*  return (
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

                    <div className="col s6 m4 l3">
                    <div className="card medium">
                        <div className="card-image">
                            <img className="responsive-img" style={imageStyle} src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}/><span className="card-title">{movie.title}</span>
                        </div>
                        <div class="card-content">
                            <p>{movie.overview}</p>
                        </div>
                        <div class="card-action">
                            <a href="#">Click for details</a>
                        </div>

                    </div>
                    </div>

                ))}
           
        </div>
    )
}

export default MoviesList;