import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch} from 'react-router-dom';
import store from './redux/store';
import Login from './components/login';
import Patient from './components/patient';
import Search from './components/search';
import history from './history';

const Root = (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/patient/:id" component={Patient} />
            </Switch>
        </Router>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
