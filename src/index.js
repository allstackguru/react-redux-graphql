import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import LoginPage from './features/login';

const store = createStore(() => {});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/login" component={LoginPage} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
