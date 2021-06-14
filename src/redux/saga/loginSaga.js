import { put, takeEvery } from 'redux-saga/effects';
import ACCESS_TYPE from '../../enum/accessType';
import { type as loginRequestType} from '../actions/loginRequest';
import { type as loginSuccessType} from '../actions/loginSuccess';
import { type as loginErrorType} from '../actions/loginError';

const delay = (ms) => new Promise(res => setTimeout(res, ms))
function simulateGetApi(){

  return { 
      access: ACCESS_TYPE.GRANTED,
      redirect:'/search'
  }
}

function* loginRequest() {

  try{
    yield delay(2000);
    const credentials = simulateGetApi();
    console.log('login',credentials);
    yield put({type:loginSuccessType,credentials});
  }catch(error){
    yield put({type:loginErrorType,error});
  }
}

function* loginSaga() {

  yield takeEvery (loginRequestType, loginRequest)
}

export default loginSaga;