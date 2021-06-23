import { put, takeEvery } from 'redux-saga/effects';
import { type as searchQS1PatientRequestType} from '../actions/searchQS1PatientRequest';
import { type as searchQS1PatientSuccessType} from '../actions/searchQS1PatientSuccess';
import { type as searchQS1PatientErrorType} from '../actions/searchQS1PatientError';

import searchPatientList from '../../data/searchPatientList';

const delay = (ms) => new Promise(res => setTimeout(res, ms))
function simulateGetApi(action){

  console.log('search-request -> ', action.payload);

  let patient = searchPatientList.filter(n =>n.id === action.payload);
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
    console.log('search-succes -> ',patient);
    yield put({type:searchQS1PatientSuccessType,patient});
  }catch(error){
    yield put({type:searchQS1PatientErrorType,error});
  }
}

function* searchSaga() {
  yield takeEvery (searchQS1PatientRequestType, searchQS1PatientRequest)
}

export default searchSaga;