import { all } from  "redux-saga/effects"
import loginSaga from "./loginSaga";
import searchSaga from "./searchSaga";
import demographicSaga from "./demographicSaga";

export default function* rootSaga(){
 yield all([
    loginSaga(),
    searchSaga(),
    demographicSaga(),
 ])
}