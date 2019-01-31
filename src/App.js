import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home';
import Productos from './routes/Productos';
import My404Component from './routes/My404Component';

class App extends Component {

  render() {
    return (
      <div>
        <Header history={this.props.history}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/productos" component={Productos} />
          <Route path="*" component={My404Component}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
