import React from 'react';
import ReactDOM from 'react-dom';
import store from "./Redux/Store.js"
import './Style/index.css';
import App from './Containers/App.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	 <Provider store={store}>
        <App/>
      </Provider>, 
   document.getElementById('root'));
   
serviceWorker.unregister();

