(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(62)},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r),i=a(13),s=a(6),o=a(7),m=a(8),u=a(10),d=a(9),v=a(11),p=a(15),h=a.n(p),E="https://api.themoviedb.org/3/",g="&api_key=5439264d63ecad2b13af25da0e7c6f97",f={searchMovies:function(e){return h.a.get(E+"search/movie?query="+e+g)},getPopularMovies:function(){return h.a.get(E+"discover/movie?sort_by=popularity.desc&page=1&include_adult=false"+g)},getSingleMovie:function(e){return h.a.get("https://api.themoviedb.org/3/movie/"+e+"?api_key=5439264d63ecad2b13af25da0e7c6f97")}},b={paddingLeft:"20px",paddingRight:"20px",marginTop:"5px",marginLeft:"20px"},y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={title:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.title)},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"row",style:{marginTop:"20px"}},l.a.createElement("form",{className:"col s10 m8",onSubmit:this.onFormSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s10"},l.a.createElement("i",{className:"material-icons prefix"},"search"),l.a.createElement("input",{className:"input-field",id:"search",type:"text",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}}),l.a.createElement("label",{for:"search"},"Search for movies")),l.a.createElement("button",{className:"waves-effect waves-light btn",type:"submit",style:b},"Search"))))}}]),t}(l.a.Component),N={margin:"auto",display:"block"},w={fontSize:"22px",position:"absolute",bottom:"0",left:"0",width:"100%",height:"50px",background:"#00838f",opacity:".8",color:"#FFF"},_=function(e){return l.a.createElement("div",{className:"row"},e.movies.map(function(e){return l.a.createElement("div",{key:e.id,className:"col m4 l3"},l.a.createElement("div",{className:"card medium z-depth-1 hoverable"},l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{className:"responsive-img",alt:e.title,style:N,src:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path)}),l.a.createElement("span",{className:"card-title",style:w},e.title)),l.a.createElement("div",{className:"card-content"},l.a.createElement("h6",null,"Popularity: ",e.popularity),l.a.createElement("p",{className:"truncate"},e.overview)),l.a.createElement("div",null,l.a.createElement(i.b,{className:"card-action text-center teal-text text-lighten-1",to:{pathname:"/movie/".concat(e.id)}},"Click for details"))))}))},S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={movies:[]},a.getInitMovies=function(){f.getPopularMovies().then(function(e){return a.setState({movies:e.data.results})}).catch(function(e){return console.log(e)})},a.search=function(e){f.searchMovies(e).then(function(e){return a.setState({movies:e.data.results})}).catch(function(e){return console.log(e)})},a.onSearchSubmit=function(e){a.search(e)},a.routeChangeAddItem=function(){console.log("id "+a.state._id),a.props.history.push("/postitem/"+a.state._id)},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getInitMovies()}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(y,{onSubmit:this.onSearchSubmit}),l.a.createElement(_,{movies:this.state.movies}))}}]),t}(l.a.Component),x={display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"40px"},j={marginLeft:"10px"},O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={id:"",title:"",genres:[],budget:0,overview:"",poster:"",release_date:"",popularity:"",vote_average:"",vote_count:""},a.getMovie=function(e){f.getSingleMovie(e).then(function(e){var t=e.data.genres.map(function(e){return e.name});a.setState({budget:e.data.budget,title:e.data.original_title,genres:t,overview:e.data.overview,poster:e.data.poster_path,release_date:e.data.release_date,popularity:e.data.popularity,vote_average:e.data.vote_average,vote_count:e.data.vote_count})}).catch(function(e){return console.log(e)})},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.setState({id:e}),this.getMovie(e)}},{key:"render",value:function(){for(var e=this.state.genres[0],t=1;t<this.state.genres.length;t++)e=e+", "+this.state.genres[t];return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"row valign-wrapper"},l.a.createElement("div",{className:"col s4 center-align"},l.a.createElement("h5",null,this.state.title)),l.a.createElement("div",{className:"col s1"}),l.a.createElement("div",{className:"col s7"},l.a.createElement("p",null,this.state.overview)))),l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s4"},l.a.createElement("img",{className:"circle responsive-img z-depth-1",style:x,alt:this.state.title,src:"https://image.tmdb.org/t/p/w200/".concat(this.state.poster)})),l.a.createElement("div",{className:"col s1"}),l.a.createElement("div",{className:"col s7"},l.a.createElement("div",{className:"section"},l.a.createElement("h6",null,l.a.createElement("b",null,l.a.createElement("i",null,"Release Date:"))," ",l.a.createElement("span",{style:j},this.state.release_date))),l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:"section"},l.a.createElement("h6",null,l.a.createElement("b",null,l.a.createElement("i",null,"Budget:"))," ",l.a.createElement("span",{style:j},this.state.budget))),l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:"section"},l.a.createElement("h6",null,l.a.createElement("b",null,l.a.createElement("i",null,"Popularity:"))," ",l.a.createElement("span",{style:j},this.state.popularity))),l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:"section"},l.a.createElement("h6",null,l.a.createElement("b",null,l.a.createElement("i",null,"Voted Rating:"))," ",l.a.createElement("span",{style:j},this.state.vote_average))),l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:"section"},l.a.createElement("h6",null,l.a.createElement("b",null,l.a.createElement("i",null,"Vote Count:"))," ",l.a.createElement("span",{style:j},this.state.vote_count))),l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:"section"},l.a.createElement("h6",null,l.a.createElement("b",null,l.a.createElement("i",null,"Genres:"))," ",l.a.createElement("span",{style:j},e))),l.a.createElement("div",{className:"divider"}))))}}]),t}(l.a.Component),k=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:S}),l.a.createElement(s.a,{exact:!0,path:"/movie/:id",component:O})," */}")))};a(59).config(),c.a.render(l.a.createElement(k,null),document.querySelector("#root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b4ba2937.chunk.js.map