import React from 'react';


class SearchBar extends React.Component {
    render() {
        return (
            <div className="row" style={{marginTop: '20px'}}>
                <form className="col s10 m8">
                    <div className="row">
                        <div className="input-field col s10">
                            <i className="material-icons prefix">search</i>
                            <input className="input-field" id="search" type="text"></input>
                            <label for="search">Search for movies</label>
                        </div>
                        
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SearchBar;
