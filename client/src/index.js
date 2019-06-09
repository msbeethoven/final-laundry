import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './redux/store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <Provider store={store}>
      <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
      </div>
      </BrowserRouter>
    </Provider>
  </div>,

 document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
