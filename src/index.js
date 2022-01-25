import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/AppContainer';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

/** znajdź element, którego id to 'app', i wstaw do niego komponent <App /> */
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));

