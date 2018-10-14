import React, { Component } from 'react';
import './App.scss';
import Back from "./js/Back";
import {
    HashRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <Back/>
                <Switch>
                </Switch>
            </div>
        </HashRouter>
    );
  }
}

export default App;
