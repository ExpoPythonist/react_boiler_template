import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from "./Redux/Store.js"
import './Style/index.css';
import App from './Routes/Settings';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	 <Provider store={store}>
        <App/>
      </Provider>, 
   document.getElementById('root'));
   
serviceWorker.unregister();

