import { put, takeEvery } from 'redux-saga/effects';
import { type as insurancePageRequestType} from '../actions/insurancePageRequest';
import { type as insurancePageSuccessType} from '../actions/insurancePageSuccess';
import { type as insurancePageErrorType} from '../actions/insurancePageError';
import PATIENT_TYPE from '../../enum/patientType';

import insuranceFDPatientListPolicies from '../../data/insuranceFDPatientListPolicies';
import insuranceLCCPatientListPolicies from '../../data/insuranceLCCPatientListPolicies';

const delay = (ms) => new Promise(res => setTimeout(res, ms))
function simulateGetApi(action){

  console.log('insurance-policies-request -> ', action.payload);
  
  let policies = [];
    switch(action.payload.patientType){
        case PATIENT_TYPE.FD:
          policies = insuranceFDPatientListPolicies.filter(n =>n.id === action.payload.id);
        break
        case PATIENT_TYPE.LCC:
          policies = insuranceLCCPatientListPolicies.filter(n =>n.id === action.payload.id);
        break
        default:
          break;
      }

    if(policies.length === 0){
      throw new Error(404);
    }

    policies[0].patientType = action.payload.patientType;
  return policies[0];
}

function* insurancePage(action) {
  
  try{
    yield delay(1000);
    const data = simulateGetApi(action);
    console.log('insurance-policies-success -> ',data);

    if(data.policies.length === 0 ){
      yield put({type:insurancePageErrorType,error:'Policies not found'});
    }else{
      yield put({type:insurancePageSuccessType,policies: data.policies});
    }

  }catch(error){
    yield put({type:insurancePageErrorType,error});
  }
}

function* insuranceSaga() {
  yield takeEvery (insurancePageRequestType, insurancePage)
}

export default insuranceSaga;