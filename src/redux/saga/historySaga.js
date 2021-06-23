import { put, takeEvery } from 'redux-saga/effects';
import { type as historyFindPatientRequestType} from '../actions/historyFindPatientRequest';
import { type as historyFindPatientSuccessType} from '../actions/historyFindPatientSuccess';
import { type as demographicFindPatientErrorType} from '../actions/demographicFindPatientError';
import { type as historyPageRequestType} from '../actions/historyPageRequest';
import PATIENT_TYPE from '../../enum/patientType';

import historyFDPatientList from '../../data/historyFDPatientList';
import historyLCCPatientList from '../../data/historyLCCPatientList';

const delay = (ms) => new Promise(res => setTimeout(res, ms))
function simulateGetApi(action){

  console.log('history-request -> ', action.payload);

  let history = [];
    switch(action.payload.patientType){
        case PATIENT_TYPE.FD:
          history = historyFDPatientList.filter(n =>n.id === action.payload.id);
        break
        case PATIENT_TYPE.LCC:
          history = historyLCCPatientList.filter(n =>n.id === action.payload.id);
        break
        default:
          break;
      }

    if(history.length === 0){
      throw new Error(404);
    }

    history[0].patientType = action.payload.patientType;
    history[0].drugSelected = action.payload.drugSelected;
  return history[0];
}

function* historyFindPatient(action) {
  
  try{
    yield delay(1000);
    const data = simulateGetApi(action);
    console.log('history-success -> ',data);

    const payload = {id:data.id,patientType:data.patientType,page:1,drugSelected:data.drugSelected};
    yield put({type:historyPageRequestType,payload});

    yield put({type:historyFindPatientSuccessType,data});
  }catch(error){
    yield put({type:demographicFindPatientErrorType,error});
  }
}

function* rxProfileSaga() {
  yield takeEvery (historyFindPatientRequestType, historyFindPatient)
}

export default rxProfileSaga;