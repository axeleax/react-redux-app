import { all } from  "redux-saga/effects"
import loginSaga from "./loginSaga";
import searchSaga from "./searchSaga";
import demographicSaga from "./demographicSaga";
import insuranceSaga from "./insuranceSaga";
import insurancePoliciesSaga from "./insurancePoliciesSaga";
import rxProfileSaga from "./rxProfileSaga";
import rxProfileDrugsSaga from "./rxProfileDrugsSaga";
import historySaga from "./historySaga";
import historyTransactionsSaga from "./historyTransactionsSaga";

export default function* rootSaga(){
 yield all([
    loginSaga(),
    searchSaga(),
    demographicSaga(),
    insuranceSaga(),
    insurancePoliciesSaga(),
    rxProfileSaga(),
    rxProfileDrugsSaga(),
    historySaga(),
    historyTransactionsSaga(),
 ])
}