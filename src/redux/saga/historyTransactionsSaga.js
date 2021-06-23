import { put, takeEvery } from 'redux-saga/effects';
import { type as historyPageRequestype} from '../actions/historyPageRequest';
import { type as historyPageSuccessType} from '../actions/historyPageSuccess';
import { type as historyPageErrorType} from '../actions/historyPageError';
import PATIENT_TYPE from '../../enum/patientType';

import historyFDPatientListTransactions from '../../data/historyFDPatientListTransactions';
import historyLCCPatientListTransactions from '../../data/historyLCCPatientListTransactions';

const delay = (ms) => new Promise(res => setTimeout(res, ms))
function simulateGetApi(action){

  console.log('history-transactions-request -> ', action.payload);

  let transactions = [];
    switch(action.payload.patientType){
        case PATIENT_TYPE.FD:
          transactions = historyFDPatientListTransactions.filter(n =>n.id === action.payload.id);
        break
        case PATIENT_TYPE.LCC:
          transactions = historyLCCPatientListTransactions.filter(n =>n.id === action.payload.id);
        break
        default:
          break;
      }

    if(transactions.length === 0){
      throw new Error(404);
    }

    transactions[0].patientType = action.payload.patientType;
  return transactions[0];
}

function* historyFindPatient(action) {
  
  try{
    yield delay(1000);
    const data = simulateGetApi(action);
    console.log('history-transactions-success -> ',data);

    if(data.transactions.length === 0 ){
      yield put({type:historyPageErrorType,error:'Transactions not found'});
    }else{
      yield put({type:historyPageSuccessType,transactions:data.transactions});
    }
    
  }catch(error){
    yield put({type:historyPageErrorType,error});
  }
}

function* rxProfileSaga() {
  yield takeEvery (historyPageRequestype, historyFindPatient)
}

export default rxProfileSaga;