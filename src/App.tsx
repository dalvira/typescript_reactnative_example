/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import HelloContainer from './containers/HelloContainer';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <HelloContainer />
      </Provider>
    );
  }
}
