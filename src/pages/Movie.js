import React from 'react';
import API from "../utils/API";
import { Link } from "react-router-dom";

class Movie extends React.Component {

    state = { id: "",
              actors: []
    
    
    };

    // When this component mounts, get all data for one movie with the id passed as a parameter
    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);
        this.setState({id});
        this.getMovie(id);
    }

    getMovie = (id) => {
        API.getSingleMovie(id)
        .then(res=> console.log(res)
           
            /* res => this.setState({ movies: res.data.results }) */
            )
        .catch(err => console.log(err)); 
    };
 

    render() {
        return(
            <div>Movie</div>
        )
        
    }

    

}

export default Movie;