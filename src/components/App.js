import React from 'react';
import { Switch, BrowserRouter as Router, Route, withRouter, Redirect } from "react-router-dom";
import Homepage from "../pages/Homepage";




const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    {/* <Route exact path="/postitem/:id" component={PostItem} /> */}
                </Switch>
            </div>
        </Router>
    )

}


export default App;