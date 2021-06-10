import { put, takeEvery } from 'redux-saga/effects';
import { type as searchQS1PatientRequestType} from '../actions/searchQS1PatientRequest';
import { type as searchQS1PatientSuccessType} from '../actions/searchQS1PatientSuccess';
import { type as searchQS1PatientErrorType} from '../actions/searchQS1PatientError';

import qs1FDPatientList from '../../data/qs1FDPatientList';

const delay = (ms) => new Promise(res => setTimeout(res, ms))
function simulateGetApi(action){

  let patient = qs1FDPatientList.filter(n =>n.id === action.payload);
  if(patient.length === 0){
    throw new Error(404);
  }

  patient[0].link = `/patient/${patient[0].id}`;
  return patient[0];
}


function* searchQS1PatientRequest(action) {
  try{
    yield delay(1000);
    const patient = simulateGetApi(action);
    yield put({type:searchQS1PatientSuccessType,patient});
  }catch(error){
    yield put({type:searchQS1PatientErrorType,error});
  }
}

function* searchSaga() {
  yield takeEvery (searchQS1PatientRequestType, searchQS1PatientRequest)
}

export default searchSaga;