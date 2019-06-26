import axios from "axios";
const BASEURL = "https://api.themoviedb.org/3/";
const popQuery = "discover/movie?sort_by=popularity.desc&page=1";
const searchPath = "search/movie?query="
const APIKEY = "&api_key=" + process.env.REACT_APP_MOVIE_KEY;

export default {


  //the method returns a list of matching movies based on title
  searchMovies: function(query) {
    return axios.get(BASEURL + searchPath + query + APIKEY);
  },

  //the method returns a list of twenty most popular movies 
  getPopularMovies: function() {
      console.log(BASEURL + popQuery + APIKEY);
    return axios.get(BASEURL + popQuery + APIKEY);
  }

};