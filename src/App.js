import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Productos from './routes/Productos';
import Sabores from './routes/Sabores';
import My404Component from './routes/My404Component';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/sabores" component={Sabores} />
          <Route path="*" component={My404Component}/>
        </Switch>
      </div>
    );
  }
}

export default App;
