import { createStore, combineReducers, applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import login from './reducers/login';
import search from './reducers/search';
import patient from './reducers/patient';
import demographic from './reducers/demographic';
import insurance from './reducers/insurance';
import rxProfile from './reducers/rxProfile';
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    login,
    search,
    patient,
    demographic,
    insurance,
    rxProfile,
});

const store = createStore(reducer,{},composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga)
export default store;




