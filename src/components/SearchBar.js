import React from 'react';

//class component SearchBar
class SearchBar extends React.Component {

    //define state
    state = { title: ''};

    render() {
        return (
            <div className="row" style={{marginTop: '20px', marginLeft:'20px'}}>
                <form className="col s10 m8">
                    <div className="row">
                        <div className="input-field col s10">
                            <i className="material-icons prefix">search</i>
                            <input className="input-field" id="search" type="text" value = {this.state.title} onChange={(e) => this.setState({ title: e.target.value})}></input>
                            <label for="search">Search for movies</label>
                        </div>
                        
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SearchBar;
