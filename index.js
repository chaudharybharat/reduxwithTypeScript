/**
 * @format
 */

//https://medium.com/@killerchip0/react-native-redux-typescript-guide-f251db03428f
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './components/redux/store';
import Header from './components/Header';


AppRegistry.registerComponent(appName, () => App);
