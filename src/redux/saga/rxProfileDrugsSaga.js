import { put, takeEvery } from 'redux-saga/effects';
import { type as rxProfilePageRequestType} from '../actions/rxProfilePageRequest';
import { type as rxProfilePageSuccessType} from '../actions/rxProfilePageSuccess';
import { type as rxProfilePageErrorType} from '../actions/rxProfilePageError';
import PATIENT_TYPE from '../../enum/patientType';

import rxProfileFDPatientListDrugs from '../../data/rxProfileFDPatientListDrugs';
import rxProfileLCCPatientListDrugs from '../../data/rxProfileLCCPatientListDrugs';

const delay = (ms) => new Promise(res => setTimeout(res, ms))
function simulateGetApi(action){

  console.log('rxProfile-drugs-request -> ', action.payload);
  
  let drugs = [];
    switch(action.payload.patientType){
        case PATIENT_TYPE.FD:
          drugs = rxProfileFDPatientListDrugs.filter(n =>n.id === action.payload.id);
        break
        case PATIENT_TYPE.LCC:
          drugs = rxProfileLCCPatientListDrugs.filter(n =>n.id === action.payload.id);
        break
        default:
          break;
      }

    if(drugs.length === 0){
      throw new Error(404);
    }

    drugs[0].patientType = action.payload.patientType;
  return drugs[0];
}

function* rxProfilePage(action) {
  
  try{
    yield delay(1000);
    const data = simulateGetApi(action);
    console.log('rxProfile-drugs-success -> ',data);

    if(data.drugs.length === 0 ){
      yield put({type:rxProfilePageErrorType,error:'Drugs not found'});
    }else{
      yield put({type:rxProfilePageSuccessType,drugs: data.drugs});
    }

  }catch(error){
    yield put({type:rxProfilePageErrorType,error});
  }
}

function* insuranceSaga() {
  yield takeEvery (rxProfilePageRequestType, rxProfilePage)
}

export default insuranceSaga;