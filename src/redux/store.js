import { createStore, combineReducers, applyMiddleware  } from 'redux';
import createSagaMiddleware from 'redux-saga'
import login from './reducers/login';
import search from './reducers/search';
import demographic from './reducers/demographic';
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    login,
    search,
    demographic,
});

const store = createStore(reducer,{},applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga)
export default store;




