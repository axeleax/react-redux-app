import { put, takeEvery } from 'redux-saga/effects';
import { type as demographicFindPatientRequestType} from '../actions/demographicFindPatientRequest';
import { type as demographicFindPatientSuccessType} from '../actions/demographicFindPatientSuccess';
import { type as demographicFindPatientErrorType} from '../actions/demographicFindPatientError';
import TAP_TYPE from '../../enum/tapType';

import qs1FDPatientList from '../../data/qs1FDPatientList';
import qs1LCCPatientList from '../../data/qs1LCCPatientList';

const delay = (ms) => new Promise(res => setTimeout(res, ms))
function simulateGetApi(action){

  let demographic = [];
    switch(action.payload.type){
        case TAP_TYPE.FD:
          demographic = qs1FDPatientList.filter(n =>n.id === action.payload.id);
        break
        case TAP_TYPE.LCC:
          demographic = qs1LCCPatientList.filter(n =>n.id === action.payload.id);
        break
        default:
          break;
      }

    if(demographic.length === 0){
      throw new Error(404);
    }

    demographic[0].type = action.payload.type;
  return demographic[0];
}


function* searchQS1PatientRequest(action) {
  
  try{
    yield delay(2000);
    const data = simulateGetApi(action);
    console.log(data)
    yield put({type:demographicFindPatientSuccessType,data});
  }catch(error){
    yield put({type:demographicFindPatientErrorType,error});
  }
}

function* searchSaga() {
  yield takeEvery (demographicFindPatientRequestType, searchQS1PatientRequest)
}

export default searchSaga;