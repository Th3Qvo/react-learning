import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/App';

/** znajdź element, którego id to 'app', i wstaw do niego komponent <App /> */
ReactDOM.render(<App />, document.getElementById('app'));

