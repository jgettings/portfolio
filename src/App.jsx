import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configure-store';
import ThemedApp from './theme/ThemedApp';
import AppBar from './components/AppBar';
import Home from './pages/Home';

const App = () => (
  <Provider store={configureStore()}>
    <ThemedApp>
      <AppBar />
      <Home />
    </ThemedApp>
  </Provider>
);

export default hot(App);
