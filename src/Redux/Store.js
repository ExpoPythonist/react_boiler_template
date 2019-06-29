import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import reducers from "./Reducers/index";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
      middlewareEnhancer = applyMiddleware(thunk),
      composedEnhancers = composeEnhancer(middlewareEnhancer);

const store = createStore(
    reducers, 
    composedEnhancers
);

export default store;