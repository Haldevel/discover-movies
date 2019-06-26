import axios from "axios";
const BASEURL = "https://api.themoviedb.org/3/";
const POPQUERY = "discover/movie?sort_by=popularity.desc&page=1&include_adult=false";
const SEARCHPATH = "search/movie?query=";
const SINGLEPATH = "https://api.themoviedb.org/3/movie/";
const APIKEY = "&api_key=" + process.env.REACT_APP_MOVIE_KEY;
const APIKEYQUERY = "?api_key=" + process.env.REACT_APP_MOVIE_KEY;

export default {

  //the method returns a list of matching movies based on title
  searchMovies: function(query) {
    return axios.get(BASEURL + SEARCHPATH + query + APIKEY);
  },

  //the method returns a list of twenty most popular movies 
  getPopularMovies: function() {
    return axios.get(BASEURL + POPQUERY + APIKEY);
  },

  //the method gets a single movie data
  getSingleMovie: function(id) {
    return axios.get(SINGLEPATH + id + APIKEYQUERY);
  }

};