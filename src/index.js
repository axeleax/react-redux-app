import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
import Detail from './components/detail';
import Search from './components/search';

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/search" component={Search} />
                <Route path="/patient/:id" component={Detail} />
                <Redirect from="/" to="/search" />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
