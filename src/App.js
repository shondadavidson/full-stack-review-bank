import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './ducks/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            {routes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
