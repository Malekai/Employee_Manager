import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAriSPERFFpU0rR_79F7n7_OAmEK-ta3xc",
      authDomain: "manager-5f9b6.firebaseapp.com",
      databaseURL: "https://manager-5f9b6.firebaseio.com",
      projectId: "manager-5f9b6",
      storageBucket: "manager-5f9b6.appspot.com",
      messagingSenderId: "462549876197"
    };

    firebase.initializeApp(config);
  }

  render() {
    // The {} is for initial state, although we never use it unless server side rendering
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;
