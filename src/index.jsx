import React from "react";
import ReactDOM  from "react-dom";
import App from './main/app'

import promise from "redux-promise";
import multi from   "redux-multi";
import thunk from "redux-thunk";

import {applyMiddleware,createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './main/reducers'

const store = applyMiddleware(thunk,multi,promise)(createStore)(reducers)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>

    , document.getElementById('app'))