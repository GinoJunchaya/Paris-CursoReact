import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import My404Component from './routes/My404Component';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={My404Component}/>
        </Switch>
      </div>
    );
  }
}

export default App;
