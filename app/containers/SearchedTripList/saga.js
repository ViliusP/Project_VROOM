 import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { SEARCH_TRIPS } from './constants';
import {
  searchTripsSuccess,
  searchTripsError
} from './actions';

import {
  makeSelectCityFrom,
  makeSelectCityTo,
  makeSelectDateFrom,
  makeSelectDateTo
} from 'containers/SearchTripForm/selectors';

import request from 'utils/request';


function* search(action)
{
  const currentUser = 5;
  const CityFrom = yield select(makeSelectCityFrom());
  const CityTo = yield select(makeSelectCityTo());
  const DateFrom = yield select(makeSelectDateFrom());
  const DateTo = yield select(makeSelectDateTo());
  console.log(CityFrom + " " + CityTo + " " + DateFrom + " " + DateTo);
  const requestURL = 'http://localhost:3001/trips?driver.id_ne=' + currentUser;
  //const requestURL = 'http://localhost:3001/trips';
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
