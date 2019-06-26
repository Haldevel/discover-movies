import React from 'react';
import API from "../utils/API";
import { Link } from "react-router-dom";

class Movie extends React.Component {

    state = {
        id: "",
        title: "",
        genres: [],
        budget: 0,
        overview: "",
        poster: "",
        release_date: "",
        popularity: "",
        vote_average: "",
        vote_count: ""
    };

    // When this component mounts, get all data for one movie with the id passed as a parameter
    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);
        this.setState({ id });
        this.getMovie(id);
    }

    getMovie = (id) => {
        API.getSingleMovie(id)
            .then(res => {
                this.setState({
                    budget: res.data.budget,
                    title: res.data.original_title,
                    genres: res.data.genres,
                    overview: res.data.overview,
                    poster: res.data.poster_path,
                    release_date: res.data.release_date,
                    popularity: res.data.popularity,
                    vote_average: res.data.vote_average,
                    vote_count: res.data.vote_count
                })
            })
            .catch(err => console.log(err));
    };


    render() {
        console.log(this.state.genres)
        return (
            <div className="container">
                <div className="divider"></div>
                <div className="section">
                    <h5>{this.state.title}</h5>
                </div>
                <div className="divider"></div>
                <div class="row">

                    <div class="col s3">

                        <img className="responsive-img" alt={this.state.title} src={`https://image.tmdb.org/t/p/w200/${this.state.poster}`} />
                    </div>
                    <div class="col s5">
                        <p>{this.state.overview}</p>
                    </div>
                    <div class="col s4">
                        <div className="section">
                            <h6>Release Date: {this.state.release_date}</h6>
                        </div>
                        <div className="divider"></div>
                        <div className="section">
                            <h6> Budget: {this.state.budget}</h6>
                        </div>
                        <div className="divider"></div>
                        <div className="section">
                            <h6> Popularity: {this.state.popularity}</h6>
                        </div>
                        <div className="divider"></div>
                        <div className="section">
                            <h6> Voted Rating: {this.state.vote_average}</h6>
                        </div>
                        <div className="divider"></div>
                        <div className="section">
                            <h6> Vote Count: {this.state.vote_count}</h6>
                        </div>
                        <div className="divider"></div>
                        <div className="section">
                            <h6> Genres: </h6>
                        </div>
                        <div className="divider"></div>


                    </div>

                </div>



            </div>
        )

    }



}

export default Movie;