import * as React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import HomeScreen     from "./components/HomeScreen";
import LoadScreen     from "./components/LoadScreen";
import ListScreen     from "./components/ListScreen";
import GreetingScreen from "./components/GreetingScreen";
import ErrorScreen    from "./components/ErrorScreen";

import { createStore } from 'redux';
import AllReducers from './store/reducers';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ createStore(AllReducers) }>
        <Router>
          <Scene key="root">
            <Scene key="home"  component={ HomeScreen } initial />
            <Scene key="load"  component={ LoadScreen } title="Load" />
            <Scene key="greet" component={ GreetingScreen } title="Greeting" />
            <Scene key="error" component={ ErrorScreen } title="Error" />
            <Scene key="list"  component={ ListScreen } title="List" />
          </Scene>
        </Router>
      </Provider>
    );
  }
}