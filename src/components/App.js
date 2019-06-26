import React from 'react';
import { Switch, BrowserRouter as Router, Route, withRouter, Redirect } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Movie from "../pages/Movie";





const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/movie/:id" component={Movie} /> */}
                </Switch>
            </div>
        </Router>
    )

}


export default App;