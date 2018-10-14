import React, { Component } from 'react';
import './App.scss';
import Back from "./js/Back";
import {
    HashRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import Unfallen from "./js/Unfallen";

class App extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={Back} />
                    <Route exact path='/unfallen' component={Unfallen} />
                </Switch>
            </div>
        </HashRouter>
    );
  }
}

export default App;
