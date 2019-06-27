import React from 'react';
import API from "../utils/API";


const imageStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "40px"
};

const info = {
    marginLeft: "10px"
}

const infoTitle = {
    color: "#555"
}

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
        this.setState({ id });
        this.getMovie(id);
    }

    getMovie = (id) => {
        API.getSingleMovie(id)
            .then(res => {
                //map the returned genres array to the array containing only genres names
                const gen = res.data.genres.map(genre => genre.name);
                this.setState({
                    budget: res.data.budget,
                    title: res.data.original_title,
                    genres: gen,
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

        //make a string of all genres for the movie
        let genresStr = this.state.genres[0];
        for (let i = 1; i < this.state.genres.length; i++) 
            { genresStr = genresStr + ", " + this.state.genres[i] }

        return (
            <div className="container">
                <div className="divider"></div>
                <div className="section">
                    <div className="row valign-wrapper">
                        <div className="col s4 center-align">
                            <h5>{this.state.title}</h5>
                        </div>
                        <div className="col s1">                            
                        </div>
                        <div className="col s7">
                            <p>{this.state.overview}</p>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col s4">
                       <img className="circle responsive-img z-depth-1" style={imageStyle} alt={this.state.title} src={`https://image.tmdb.org/t/p/w200/${this.state.poster}`} />
                    </div>
                    <div className="col s1"> 
                    </div>
                    <div className="col s7">
                        <div className="section">
                            <h6 style={infoTitle}><b><i>Release Date:</i></b> <span style={info}>{this.state.release_date}</span></h6>
                        </div>
                        <div className="divider"></div>
                        <div className="section">
                            <h6 style={infoTitle}><b><i>Budget:</i></b><span style={info}>{this.state.budget}</span></h6>
                        </div>
                        <div className="divider"></div>
                        <div className="section">
                            <h6 style={infoTitle}><b><i>Popularity:</i></b> <span style={info}>{this.state.popularity}</span></h6>
                        </div>
                        <div className="divider"></div>
                        <div className="section">
                            <h6 style={infoTitle}><b><i>Voted Rating:</i></b> <span style={info}>{this.state.vote_average}</span></h6>
                        </div>
                        <div className="divider"></div>
                        <div className="section">
                            <h6 style={infoTitle}><b><i>Vote Count:</i></b> <span style={info}>{this.state.vote_count}</span></h6>
                        </div>
                        <div className="divider"></div>
                        <div className="section">
                            <h6 style={infoTitle}><b><i>Genres:</i></b> <span style={info}>{genresStr}</span></h6>
                        </div>
                        <div className="divider"></div>
                    </div>
                </div>
            </div>
        )

    }

}

export default Movie;