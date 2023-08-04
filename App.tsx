/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './components/redux/store';

import StackRoot from './components/StackRoot';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <StackRoot />
    </Provider>
  );
}

export default App;
