import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { 
  SUBMIT_REQUEST, 
} from './constants';
import { SubmitRequest, SubmitRequestSuccess, SubmitRequestError } from './actions';
import  formState from 'containers/SubmitRequestForm/selectors';
import request from 'utils/request';
import { Reset } from 'containers/SubmitRequestForm/actions';
function* submit(action)
{
  const currentUser = 5;
  const currentName = 'Vilius';
  const currnetSurname = 'Paliokas';
  const { address1, address2, info } = yield select(formState());
  const obj = {
    id: '',
    addressFrom: address1,
    addressTo: address2,
    requestInfo: info,
    status: 'pending',
    requestPerson: { 
      personID: currentUser,
      name: currentName,
      surname: currnetSurname,
      profileURL: ''
    }
  }

  const options = {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }
  const requestURL = 'http://localhost:3001/requests/';
  try{
    yield call(request, requestURL, options);
    yield put(SubmitRequestSuccess());
    yield put(Reset());
    console.log("before");
  } catch (error){
    yield put(SubmitRequestError(error));
  }
}  


// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(SUBMIT_REQUEST, submit);
}