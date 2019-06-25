import React from 'react';
import API from "../utils/API";
import SearchBar from './SearchBar';
import MoviesList from './MoviesList';


class App extends React.Component {

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


    onSearchSubmit = (title) => {
        console.log(title);
        this.search(title);
    };

    render() {
        return <div className="container">
            <SearchBar onSubmit = {this.onSearchSubmit}/> 
            <MoviesList movies = {this.state.movies}/>
            </div>        
    };
}

export default App;