import { put, takeEvery } from 'redux-saga/effects';
import { type as demographicFindPatientRequestType} from '../actions/demographicFindPatientRequest';
import { type as demographicFindPatientSuccessType} from '../actions/demographicFindPatientSuccess';
import { type as demographicFindPatientErrorType} from '../actions/demographicFindPatientError';
import PATIENT_TYPE from '../../enum/patientType';

import demographicFDPatientList from '../../data/demographicFDPatientList';
import demographicLCCPatientList from '../../data/demographicLCCPatientList';

const delay = (ms) => new Promise(res => setTimeout(res, ms))
function simulateGetApi(action){

  let demographic = [];
    switch(action.payload.patientType){
        case PATIENT_TYPE.FD:
          demographic = demographicFDPatientList.filter(n =>n.id === action.payload.id);
        break
        case PATIENT_TYPE.LCC:
          demographic = demographicLCCPatientList.filter(n =>n.id === action.payload.id);
        break
        default:
          break;
      }

    if(demographic.length === 0){
      throw new Error(404);
    }

    demographic[0].type = action.payload.patientType;
  return demographic[0];
}

function* demographicFindPatient(action) {
  
  try{
    yield delay(1000);
    const data = simulateGetApi(action);
    console.log('demographic',data);
    yield put({type:demographicFindPatientSuccessType,data});
  }catch(error){
    yield put({type:demographicFindPatientErrorType,error});
  }
}

function* demographicSaga() {
  yield takeEvery (demographicFindPatientRequestType, demographicFindPatient)
}

export default demographicSaga;