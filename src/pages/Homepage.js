import React from 'react';
import API from "../utils/API";
import SearchBar from '../components/SearchBar';
import MoviesList from '../components/MoviesList';

class Homepage extends React.Component {

    state = {movies: []};

    // When this component mounts, search the API for 20 most popular movies
    componentDidMount() {
        this.getInitMovies();
    }

    getInitMovies = () => {
        API.getPopularMovies()
        .then(res => this.setState({ movies: res.data.results }))
        .catch(err => console.log(err)); 
    };

    //a method to search for a movie based on a title
    search = query => {
        API.searchMovies(query)
            .then(res => this.setState({
                movies: res.data.results
            }))
            .catch(err => console.log(err));
    };

    //a class method which will be called from the child component SearchBar
    onSearchSubmit = (title) => {
        this.search(title);
    };

    //a class method which will be clled from the child component MoviesList
    routeChangeAddItem = () => {
        console.log("id " + this.state._id);
        this.props.history.push("/postitem/" + this.state._id);
      };   

    //we use two components to render 
    render() {
        return <div className="container">
            <SearchBar onSubmit = {this.onSearchSubmit}/> 
            <MoviesList movies = {this.state.movies}/>
            </div>        
    };

}

export default Homepage;