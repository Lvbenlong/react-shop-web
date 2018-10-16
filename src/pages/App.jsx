import React, { Component } from 'react'
import { Provider } from 'react-redux';
import configureStore from '../store/ConfigureStore';
import Setup from './Setup'

const store = configureStore()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <Provider store={store}>
        <Setup />
      </Provider>
    );
  }
}

export default App;