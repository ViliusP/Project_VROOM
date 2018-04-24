 import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { SEARCH_TRIPS } from './constants';
import {
  searchTripsSuccess,
  searchTripsError
} from './actions';
import request from 'utils/request';


function* search(action)
{
  const requestURL = 'http://localhost:3001/trips';
  try{
    const data = yield call(request, requestURL);
    yield put(searchTripsSuccess(data));
  } catch(error) {
    yield put(searchTripsError(error));
  }    
}
// Individual exports for testing
export default function* defaultSaga() {
    yield takeLatest(SEARCH_TRIPS, search);
}
