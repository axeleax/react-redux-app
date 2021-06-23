import { put, takeEvery } from 'redux-saga/effects';
import { type as insuranceFindPatientRequestType} from '../actions/insuranceFindPatientRequest';
import { type as insuranceFindPatientSuccessType} from '../actions/insuranceFindPatientSuccess';
import { type as insuranceFindPatientErrorType} from '../actions/insuranceFindPatientError';
import { type as insurancePageRequestType} from '../actions/insurancePageRequest';
import PATIENT_TYPE from '../../enum/patientType';

import insuranceFDPatientList from '../../data/insuranceFDPatientList';
import insuranceLCCPatientList from '../../data/insuranceLCCPatientList';

const delay = (ms) => new Promise(res => setTimeout(res, ms))
function simulateGetApi(action){

  console.log('insurance-request -> ', action.payload);

  let insurance = [];
    switch(action.payload.patientType){
        case PATIENT_TYPE.FD:
          insurance = insuranceFDPatientList.filter(n =>n.id === action.payload.id);
        break
        case PATIENT_TYPE.LCC:
          insurance = insuranceLCCPatientList.filter(n =>n.id === action.payload.id);
        break
        default:
          break;
      }

    if(insurance.length === 0){
      throw new Error(404);
    }

    insurance[0].patientType = action.payload.patientType;
  return insurance[0];
}

function* insurenceFindPatient(action) {
  
  try{
    yield delay(1000);
    const data = simulateGetApi(action);
    console.log('insurance-success -> ',data);
  
    const payload = {id:data.id,patientType:data.patientType,page:1};
    yield put({type:insurancePageRequestType,payload});

    yield put({type:insuranceFindPatientSuccessType,data});
  }catch(error){
    yield put({type:insuranceFindPatientErrorType,error});
  }
}

function* insuranceSaga() {
  yield takeEvery (insuranceFindPatientRequestType, insurenceFindPatient)
}

export default insuranceSaga;