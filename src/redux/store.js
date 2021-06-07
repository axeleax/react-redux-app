import { createStore, combineReducers } from 'redux';
import search from './reducers/search';
import detail from './reducers/detail';

const reducer = combineReducers({
    search,
    detail,
});

const store = createStore(reducer);

export default store;
