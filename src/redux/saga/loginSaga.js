import { put, takeEvery } from 'redux-saga/effects';
import { type as loginRequestType} from '../actions/loginRequest';
import { type as loginSuccessType} from '../actions/loginSuccess';
import { type as loginErrorType} from '../actions/loginError';

import loginUsersList from '../../data/loginUsersList';

const delay = (ms) => new Promise(res => setTimeout(res, ms))
function simulateGetApi(action){
  
  console.log('login-request -> ', action.payload);

  let login = [];
  login = loginUsersList.filter(n =>(n.id === action.payload.id && n.password === action.payload.password));
  if(login.length === 0){
    throw new Error(404);
  }
  login[0].password = 'CONFIDENTIAL';
  
  return login[0];
}

function* loginRequest(action) {

  try{
    yield delay(2000);
    const credentials = simulateGetApi(action);
    console.log('login-success -> ',credentials);
    yield put({type:loginSuccessType,credentials});
  }catch(error){
    yield put({type:loginErrorType,error});
  }
}

function* loginSaga() {

  yield takeEvery (loginRequestType, loginRequest)
}

export default loginSaga;