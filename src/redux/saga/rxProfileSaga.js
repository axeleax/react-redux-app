import { put, takeEvery } from 'redux-saga/effects';
import { type as rxProfileFindPatientRequestType} from '../actions/rxProfileFindPatientRequest';
import { type as rxProfileFindPatientSuccessType} from '../actions/rxProfileFindPatientSuccess';
import { type as rxProfileFindPatientErrorType} from '../actions/rxProfileFindPatientError';
import PATIENT_TYPE from '../../enum/patientType';

import rxProfileFDPatientList from '../../data/rxProfileFDPatientList';
import rxProfileLCCPatientList from '../../data/rxProfileLCCPatientList';

const delay = (ms) => new Promise(res => setTimeout(res, ms))
function simulateGetApi(action){

  let rxProfile = [];
    switch(action.payload.patientType){
        case PATIENT_TYPE.FD:
          rxProfile = rxProfileFDPatientList.filter(n =>n.id === action.payload.id);
        break
        case PATIENT_TYPE.LCC:
          rxProfile = rxProfileLCCPatientList.filter(n =>n.id === action.payload.id);
        break
        default:
          break;
      }

    if(rxProfile.length === 0){
      throw new Error(404);
    }

    rxProfile[0].type = action.payload.patientType;
  return rxProfile[0];
}

function* rxProfileFindPatient(action) {
  
  try{
    yield delay(1000);
    const data = simulateGetApi(action);
    console.log('rxProfile',data);
    yield put({type:rxProfileFindPatientSuccessType,data});
  }catch(error){
    yield put({type:rxProfileFindPatientErrorType,error});
  }
}

function* rxProfileSaga() {
  yield takeEvery (rxProfileFindPatientRequestType, rxProfileFindPatient)
}

export default rxProfileSaga;